import { Box, FormControl, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { usePassValuesToEdit } from '../../contexts/PassValuesToEditContext';
import { useSchedule } from '../../contexts/ScheduleContext';
import { GenericButton } from '../Buttons';
import { Container } from './styles';

const schema = object({
	name: string().required('O campo título é obrigatório.'),
	description: string(),
	startTime: string(),
	endTime: string().test('is-later', 'O horário de término deve ser posterior ao horário de início.', function (value) {
		const { startTime } = this.parent;
		if (!value || !startTime) return true;
		return value > startTime;
	}),
});

type FormData = InferType<typeof schema>;

export function EditTask() {
	const { updateTask, returnToMainView } = useSchedule();
	const { taskValues } = usePassValuesToEdit();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		function setValuesInputs() {
			setValue('name', taskValues.name);
			setValue('description', taskValues.description);
			setValue('startTime', taskValues.startTime);
			setValue('endTime', taskValues.endTime);
		}
		setValuesInputs();
	}, [taskValues]);

	function onSubmit(data: FormData) {
		const newUpdateTask = { id: taskValues.id, position: taskValues.position, checked: taskValues.checked, ...data };
		updateTask(newUpdateTask);
		returnToMainView();
	}

	function handleClearInputs() {
		setValue('name', '');
		setValue('description', '');
		setValue('startTime', '');
		setValue('endTime', '');
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Container>
				<Stack w='100%'>
					<FormControl isRequired isInvalid={!!errors.name}>
						<FormLabel>Título</FormLabel>
						<Input type='text' placeholder='Digite o título da tarefa' {...register('name')} />
						{errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
					</FormControl>
					<FormControl isInvalid={!!errors.description}>
						<FormLabel>Descrição</FormLabel>
						<Input type='text' placeholder='Digite a descrição da tarefa' {...register('description')} />
					</FormControl>
					<FormControl isInvalid={!!errors.startTime}>
						<FormLabel>Horário de Início</FormLabel>
						<Input type='time' {...register('startTime')} />
					</FormControl>
					<FormControl isInvalid={!!errors.endTime}>
						<FormLabel>Horário de Finalização</FormLabel>
						<Input type='time' {...register('endTime')} />
						{errors.endTime && <FormErrorMessage>{errors.endTime.message}</FormErrorMessage>}
					</FormControl>
					<FormControl>
						<FormLabel>Cor</FormLabel>
						<Input type='color' w='100px' />
					</FormControl>
					<Box display='flex' gap='4px'>
						<GenericButton variant='save' title='Salvar Tarefa' />
						<GenericButton variant='clear' onClick={handleClearInputs} title='Limpar Campos' />
						<GenericButton variant='cancel' onClick={returnToMainView} />
					</Box>
				</Stack>
			</Container>
		</form>
	);
}
