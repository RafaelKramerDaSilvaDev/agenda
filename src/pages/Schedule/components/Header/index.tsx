import { useSchedule } from "../../contexts/ScheduleContext";
import { GenericButton } from "../Buttons";
import { MessageDisplay } from "../MessageDisplay";
import { BoxBottom, BoxLeft, BoxRight, HeaderStylized } from "./styles";

export function Header({ gridArea }: { gridArea: string }) {
  const { optionSelected, insertMockedTasks } = useSchedule();

  return (
    <HeaderStylized gridArea={gridArea}>
      <MessageDisplay />
      <BoxBottom>
        <BoxLeft>
          <GenericButton variant="new" onClick={() => optionSelected("new")} />
          <GenericButton variant="build" onClick={insertMockedTasks} />
        </BoxLeft>
        <BoxRight>
          <GenericButton
            variant="sortAlphabetical"
            onClick={() => optionSelected("alphabetical")}
          />
          <GenericButton
            variant="sortAscending"
            onClick={() => optionSelected("ascending")}
          />
          <GenericButton
            variant="sortDescending"
            onClick={() => optionSelected("descending")}
          />
        </BoxRight>
      </BoxBottom>
    </HeaderStylized>
  );
}
