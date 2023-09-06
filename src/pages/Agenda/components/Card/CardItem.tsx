import { BiSolidEdit, BiSolidSave, BiSolidTrashAlt } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { useAgenda } from "../../../../contexts/AgendaContext";
import {
  AlignIconAndText,
  CardBox,
  CardDescription,
  CardName,
  Content,
  DeleteButton,
  EditButton,
  EndTimeCard,
  OrganizeButtons,
  SaveButton,
  StartTimeCard,
} from "./styles";
import { TarefaProps } from "../../types/TarefaProps";

export function CardItem({
  id,
  name,
  description,
  startTime,
  endTime,
}: TarefaProps) {
  const { optionSelected, deleteTarefa } = useAgenda();

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
        <EditButton onClick={() => optionSelected("edit")}>
          <BiSolidEdit size={20} color="white" />
        </EditButton>
        <DeleteButton onClick={() => deleteTarefa(id)}>
          <BiSolidTrashAlt size={20} color="white" />
        </DeleteButton>
        <SaveButton onClick={() => optionSelected("save")}>
          <BiSolidSave size={20} color="white" />
        </SaveButton>
      </OrganizeButtons>
    </CardBox>
  );
}
