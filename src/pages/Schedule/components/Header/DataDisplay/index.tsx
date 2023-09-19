import { Box } from "@chakra-ui/react";
import { useDisplay } from "../../../contexts/DisplayContext";
import { DataBox, TaskQuantityDataBox, Text } from "./styles";

export function DataDisplay() {
  const { showLastUpdated, taskQuantity } = useDisplay();

  return (
    <Box display="flex" gap="4px">
      <TaskQuantityDataBox title="Total Tarefas">
        <Text>{taskQuantity}</Text>
      </TaskQuantityDataBox>
      <DataBox>
        <Text>{showLastUpdated}</Text>
      </DataBox>
    </Box>
  );
}
