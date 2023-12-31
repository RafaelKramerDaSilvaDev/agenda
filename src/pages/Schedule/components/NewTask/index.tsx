import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InferType, object, string } from "yup";
import { useSchedule } from "../../contexts/ScheduleContext";
import { GenericButton } from "../Buttons";
import { Container } from "./styles";

const schema = object({
  name: string().required("O campo título é obrigatório."),
  description: string(),
  startTime: string(),
  endTime: string().test(
    "is-later", // Nome do teste
    "O horário de término deve ser posterior ao horário de início.", // Mensagem de erro
    // Função de validação personalizada para o campo endTime
    function (value) {
      // `this.parent` acessa o objeto que contém todos os campos do schema
      // Desestruturamos o objeto para extrair o valor do campo startTime
      const { startTime } = this.parent;

      // Verifica se o value (endTime) ou startTime estão indefinidos ou têm valores falsy
      // Se qualquer um deles estiver, a validação é considerada bem-sucedida e retorna true
      if (!value || !startTime) return true;

      // Compara os valores de endTime e startTime
      // Retorna true se endTime for maior que startTime, caso contrário retorna false
      return value > startTime;
    }
  ),
});

type FormData = InferType<typeof schema>;

export function NewTask() {
  const { addTask, returnToMainView } = useSchedule();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormData) {
    addTask(data);
    returnToMainView();
  }

  function handleClearInputs() {
    setValue("name", "");
    setValue("description", "");
    setValue("startTime", "");
    setValue("endTime", "");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Container>
        <Stack w="100%">
          <FormControl isRequired isInvalid={!!errors.name}>
            <FormLabel>Título</FormLabel>
            <Input
              type="text"
              placeholder="Digite o título da tarefa"
              {...register("name")}
            />
            {errors.name && (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors.description}>
            <FormLabel>Descrição</FormLabel>
            <Input
              type="text"
              placeholder="Digite a descrição da tarefa"
              {...register("description")}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.startTime}>
            <FormLabel>Horário de Início</FormLabel>
            <Input type="time" {...register("startTime")} />
          </FormControl>
          <FormControl isInvalid={!!errors.endTime}>
            <FormLabel>Horário de Finalização</FormLabel>
            <Input type="time" {...register("endTime")} />
            {errors.endTime && (
              <FormErrorMessage>{errors.endTime.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Cor</FormLabel>
            <Input type="color" w="100px" />
          </FormControl>
          <Box display="flex" gap="4px">
            <GenericButton variant="save" title="Salvar Tarefa" />
            <GenericButton
              variant="clear"
              onClick={handleClearInputs}
              title="Limpar Campos"
            />
            <GenericButton variant="cancel" onClick={returnToMainView} />
          </Box>
        </Stack>
      </Container>
    </form>
  );
}
