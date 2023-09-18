import { useSchedule } from "../../contexts/ScheduleContext";
import { GenericButton } from "../Buttons";
import { MessageDisplay } from "../MessageDisplay";
import { BoxBottom, BoxLeft, BoxRight, HeaderStylized } from "./styles";

export function Header() {
  const { optionSelected, insertMockedTasks, sortAscending, sortDescending } =
    useSchedule();

  return (
    <HeaderStylized>
      <MessageDisplay />
      <BoxBottom>
        <BoxLeft>
          <GenericButton variant="new" onClick={() => optionSelected("new")} />
          <GenericButton variant="build" onClick={insertMockedTasks} />
        </BoxLeft>
        <BoxRight>
          <GenericButton variant="sortAscending" onClick={sortAscending} />
          <GenericButton variant="sortDescending" onClick={sortDescending} />
        </BoxRight>
      </BoxBottom>
    </HeaderStylized>
  );
}
