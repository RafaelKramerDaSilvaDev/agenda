import { BiAddToQueue } from "react-icons/bi";
import { useSchedule } from "../../../../contexts/ScheduleContext";
import { HeaderStylized, NewButton } from "./styles";

export function Header() {
  const { optionSelected } = useSchedule();

  return (
    <HeaderStylized>
      <NewButton onClick={() => optionSelected("new")} title="Nova Tarefa">
        <BiAddToQueue size={20} color="white" />
      </NewButton>
    </HeaderStylized>
  );
}
