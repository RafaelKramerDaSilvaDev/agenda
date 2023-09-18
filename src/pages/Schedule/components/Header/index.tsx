import { useSchedule } from "../../contexts/ScheduleContext";
import { GenericButton } from "../Buttons";
import { MessageDisplay } from "../MessageDisplay";
import { BoxBottom, BoxLeft, BoxRight, HeaderStylized } from "./styles";

export function Header({ gridArea }: { gridArea: string }) {
  const { setSortOption, setViewOption, insertMockedTasks } = useSchedule();

  return (
    <HeaderStylized gridArea={gridArea}>
      <MessageDisplay />
      <BoxBottom>
        <BoxLeft>
          <GenericButton variant="new" onClick={() => setViewOption("new")} />
          <GenericButton variant="build" onClick={insertMockedTasks} />
          <GenericButton variant="deleteAll" />
        </BoxLeft>
        <BoxRight>
          <GenericButton
            variant="sortAlphabetical"
            onClick={() => setSortOption("alphabetical")}
          />
          <GenericButton
            variant="sortAscending"
            onClick={() => setSortOption("ascending")}
          />
          <GenericButton
            variant="sortDescending"
            onClick={() => setSortOption("descending")}
          />
        </BoxRight>
      </BoxBottom>
    </HeaderStylized>
  );
}
