import { Stack } from "@chakra-ui/react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useSchedule } from "../../contexts/ScheduleContext";
import { CardItem } from "./CardItem";

export type CardProps = {
  gridarea?: string;
};

export function Card({ gridarea }: CardProps) {
  const { tasks, reorderTasks } = useSchedule();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    reorderTasks(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppableIdForTasks">
        {(provided) => (
          <Stack
            gridArea={gridarea}
            spacing="4px"
            overflowY="auto"
            maxH="100%"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks?.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CardItem
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      startTime={item.startTime}
                      endTime={item.endTime}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
    </DragDropContext>
  );
}
