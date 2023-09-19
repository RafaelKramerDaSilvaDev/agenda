import { useDisplay } from "../../../contexts/DisplayContext";
import { LastUpdatedDisplayStylized, Text } from "./styles";

export function LastUpdatedDisplay() {
  const { showLastUpdated } = useDisplay();

  return (
    <LastUpdatedDisplayStylized title="Última Alteração">
      <Text>{showLastUpdated}</Text>
    </LastUpdatedDisplayStylized>
  );
}
