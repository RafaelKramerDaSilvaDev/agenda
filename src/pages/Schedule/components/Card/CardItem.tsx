import { Fragment } from "react";
import { FaClock } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { TaskProps } from "../../../../app/types/TaskProps";
import { usePassValuesToEdit } from "../../contexts/PassValuesToEditContext";
import { useSchedule } from "../../contexts/ScheduleContext";
import { GenericButton } from "../Buttons";
import {
  AlignIconAndText,
  CardBox,
  CardDescription,
  CardName,
  Content,
  EndTimeCard,
  OrganizeButtons,
  StartTimeCard,
} from "./styles";

export function CardItem({
  id,
  position,
  name,
  description,
  startTime,
  endTime,
}: TaskProps) {
  const { setViewOption, deleteTask } = useSchedule();
  const { setTaskValues } = usePassValuesToEdit();

  function handleEdit() {
    setViewOption("edit");

    setTaskValues({
      id: id,
      position: position,
      name: name,
      description: description,
      startTime: startTime,
      endTime: endTime,
    });
  }

  return (
    <CardBox>
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
        <GenericButton variant="edit" onClick={handleEdit} />
        <GenericButton variant="delete" onClick={() => deleteTask(id)} />
      </OrganizeButtons>
    </CardBox>
  );
}
