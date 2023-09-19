import { useSchedule } from "../../../contexts/ScheduleContext";
import { GenericButton } from "../../Buttons";
import { BoxLeft, BoxRight, ConfigurationButtonsStylized } from "./styles";

export function ConfigurationButtons() {
  const { setSortOption, setViewOption, insertMockedTasks, deleteAllTasks } =
    useSchedule();

  return (
    <ConfigurationButtonsStylized>
      <BoxLeft>
        <GenericButton variant="new" onClick={() => setViewOption("new")} />
        <GenericButton variant="build" onClick={insertMockedTasks} />
        <GenericButton variant="deleteAll" onClick={deleteAllTasks} />
      </BoxLeft>
      <BoxRight>
        <GenericButton variant="custom" />
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
    </ConfigurationButtonsStylized>
  );
}
