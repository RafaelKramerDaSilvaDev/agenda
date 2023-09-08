import { Fragment } from "react";
import { FaClock } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { TaskProps } from "../../../../app/types/TaskProps";
import { usePassValuesToEdit } from "../../contexts/PassValuesToEditContext";
import { useSchedule } from "../../contexts/ScheduleContext";
import { DeleteButton, EditButton } from "../Buttons";
import {
  AlignIconAndText,
  CardBox,
  CardDescription,
  CardName,
  Color,
  Content,
  EndTimeCard,
  OrganizeButtons,
  StartTimeCard,
} from "./styles";

export function CardItem({
  id,
  name,
  description,
  startTime,
  endTime,
}: TaskProps) {
  const { optionSelected, deleteTask } = useSchedule();
  const { setTaskValues } = usePassValuesToEdit();

  function handleEdit() {
    optionSelected("edit");

    setTaskValues({
      id: id,
      name: name,
      description: description,
      startTime: startTime,
      endTime: endTime,
    });
  }

  return (
    <CardBox>
      <Color />
      <Content>
        <CardName>{name}</CardName>
        <AlignIconAndText>
          {description && (
            <Fragment>
              <IoIosJournal />
              <CardDescription>{description}</CardDescription>
            </Fragment>
          )}
        </AlignIconAndText>
        <AlignIconAndText>
          {startTime && (
            <Fragment>
              <FaClock />
              <StartTimeCard>{`${startTime}hrs`}</StartTimeCard>
            </Fragment>
          )}
          {endTime && <EndTimeCard>{`- ${endTime}hrs`}</EndTimeCard>}
        </AlignIconAndText>
      </Content>
      <OrganizeButtons>
        <EditButton onClick={handleEdit} title="Editar Tarefa" />
        <DeleteButton onClick={() => deleteTask(id)} title="Apagar Tarefa" />
      </OrganizeButtons>
    </CardBox>
  );
}
