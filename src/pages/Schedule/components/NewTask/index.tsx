import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InferType, object, string } from "yup";
import { useSchedule } from "../../../../contexts/ScheduleContext";
import { ClearButton, SaveButton } from "../Buttons";
import { Container } from "./styles";

const schema = object({
  name: string().required(),
  description: string().required(),
  startTime: string().required(),
  endTime: string().required(),
}).required();
type FormData = InferType<typeof schema>;

export function NewTask() {
  const { addTask } = useSchedule();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data: FormData) {
    addTask(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Stack w="100%">
          <FormControl>
            <FormLabel>Título</FormLabel>
            <Input
              type="text"
              placeholder="Digite o título da tarefa"
              {...register("name")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Descrição</FormLabel>
            <Input
              type="text"
              placeholder="Digite a descrição da tarefa"
              {...register("description")}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Horário de Início</FormLabel>
            <Input type="time" {...register("startTime")} />
          </FormControl>
          <FormControl>
            <FormLabel>Horário de Finalização</FormLabel>
            <Input type="time" {...register("endTime")} />
          </FormControl>
          <FormControl>
            <FormLabel>Cor</FormLabel>
            <Input type="color" w="100px" />
          </FormControl>
          <SaveButton type="submit" />
          <ClearButton onClick={() => {}} />
        </Stack>
      </Container>
    </form>
  );
}
