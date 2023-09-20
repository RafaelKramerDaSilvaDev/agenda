import { Box } from '@chakra-ui/react';
import { BiListCheck } from 'react-icons/bi';
import { useDisplay } from '../../../contexts/DisplayContext';
import { DataBox } from './styles';
import { FaCheckDouble } from 'react-icons/fa';

export function DataDisplay() {
	const { taskQuantity, quantityChecked } = useDisplay();

	return (
		<Box display='flex' gap='4px'>
			<DataBox title='Total Tarefas'>
				<BiListCheck size={26} />
				{taskQuantity}
			</DataBox>
			<DataBox title='Tarefas Concluídas'>
				<FaCheckDouble size={14} />
				{quantityChecked}
			</DataBox>
		</Box>
	);
}
