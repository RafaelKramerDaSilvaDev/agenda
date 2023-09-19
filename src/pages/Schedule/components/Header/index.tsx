import { useSchedule } from "../../contexts/ScheduleContext";
import { GenericButton } from "../Buttons";
import { DataDisplay } from "../DataDisplay";
import { LastUpdatedDisplay } from "../LastUpdatedDisplay";
import { BoxBottom, BoxLeft, BoxRight, HeaderStylized } from "./styles";

export function Header({ gridArea }: { gridArea: string }) {
  const { setSortOption, setViewOption, insertMockedTasks, deleteAllTasks } =
    useSchedule();

  return (
    <HeaderStylized gridArea={gridArea}>
      <LastUpdatedDisplay />
      <DataDisplay />
      <BoxBottom>
        <BoxLeft>
          <GenericButton variant="new" onClick={() => setViewOption("new")} />
          <GenericButton variant="build" onClick={insertMockedTasks} />
          <GenericButton variant="deleteAll" onClick={deleteAllTasks} />
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
