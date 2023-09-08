import { FaClock } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { TaskProps, useSchedule } from "../../../../contexts/ScheduleContext";
import { DeleteButton, EditButton } from "../Buttons";
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
  name,
  description,
  startTime,
  endTime,
}: TaskProps) {
  const { optionSelected, deleteTask } = useSchedule();

  return (
    <CardBox>
      <Content>
        <CardName>{name}</CardName>
        <AlignIconAndText>
          <IoIosJournal />
          <CardDescription>{description}</CardDescription>
        </AlignIconAndText>
        <AlignIconAndText>
          <FaClock />
          {startTime && <StartTimeCard>{`${startTime}hrs`}</StartTimeCard>}
          {endTime && <EndTimeCard>{`- ${endTime}hrs`}</EndTimeCard>}
        </AlignIconAndText>
      </Content>
      <OrganizeButtons>
        <EditButton onClick={() => optionSelected("edit")} />
        <DeleteButton onClick={() => deleteTask(id)} />
      </OrganizeButtons>
    </CardBox>
  );
}
