import { Stack } from '@chakra-ui/react';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import clickSound from '../../../../app/assets/sounds/click.mp3';
import { useSchedule } from '../../contexts/ScheduleContext';
import { TaskItem } from './TaskItem';
import { TaskStylized } from './styles';

export type TaskProps = {
	gridarea?: string;
};

// Importante: a biblioteca react-beautiful-dnd não funciona com Strict Mode

export function Tasks({ gridarea }: TaskProps) {
	// reorderTasks é uma função que altera a ordem dos itens na lista
	const { tasks, reorderTasks, sortOption } = useSchedule();

	// Função executada após um item ser arrastado e solto
	const onDragEnd = (result: DropResult) => {
		// Verificando se o arrasto terminou em uma área válida
		if (!result.destination) {
			return; // Se não, encerramos a função sem alterar a ordem
		}

		// Reordenando a lista com base na origem e no destino do arrasto
		reorderTasks(result.source.index, result.destination.index);
		playDragSound();
	};

	const audio = new Audio(clickSound);

	function playDragSound() {
		audio.play();
	}

	return (
		<TaskStylized>
			{/* Componente que envolve toda a funcionalidade de arrastar e soltar*/}
			<DragDropContext onDragEnd={onDragEnd} onDragStart={playDragSound}>
				{/* Área onde os itens podem ser soltos após o arrasto */}
				<Droppable droppableId='droppableIdForTasks'>
					{(provided) => (
						// Lista visual, os atributos fornecidos pelo Droppable são espalhados aqui
						<Stack gridArea={gridarea} spacing='4px' ref={provided.innerRef} {...provided.droppableProps}>
							{/* Renderizando cada tarefa como um item que pode ser arrastado */}
							{tasks?.map((item, index) => (
								// Definindo a área que pode ser arrastada
								<Draggable
									key={item.id}
									draggableId={item.id}
									index={index}
									isDragDisabled={sortOption === 'personalized' ? false : true}
								>
									{(provided) => (
										<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
											<TaskItem
												id={item.id}
												name={item.name}
												description={item.description}
												startTime={item.startTime}
												endTime={item.endTime}
												checked={item.checked}
											/>
										</div>
									)}
								</Draggable>
							))}
							{/* Espaço reservado para ajudar na animação durante o arrasto */}
							{provided.placeholder}
						</Stack>
					)}
				</Droppable>
			</DragDropContext>
		</TaskStylized>
	);
}
