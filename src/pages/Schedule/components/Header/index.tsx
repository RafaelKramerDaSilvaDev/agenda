import { useSchedule } from "../../contexts/ScheduleContext";
import { BuildButton, NewButton } from "../Buttons";
import { HeaderStylized } from "./styles";

export function Header() {
  const { optionSelected, insertMockedTasks } = useSchedule();

  return (
    <HeaderStylized>
      <NewButton onClick={() => optionSelected("new")} title="Nova Tarefa" />
      <BuildButton onClick={insertMockedTasks} title="Gerar Tarefas" />
    </HeaderStylized>
  );
}
