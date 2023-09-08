import { FaClock } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { TaskProps } from "../../../../app/types/TaskProps";
import { useSchedule } from "../../../../contexts/ScheduleContext";
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
import { Fragment } from "react";

export function CardItem({
  id,
  name,
  description,
  startTime,
  endTime,
}: TaskProps) {
  const { optionSelected, deleteTask } = useSchedule();

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
        <EditButton
          onClick={() => optionSelected("edit")}
          title="Editar Tarefa"
        />
        <DeleteButton onClick={() => deleteTask(id)} title="Apagar Tarefa" />
      </OrganizeButtons>
    </CardBox>
  );
}
