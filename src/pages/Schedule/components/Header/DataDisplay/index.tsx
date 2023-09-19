import { Box } from "@chakra-ui/react";
import { useDisplay } from "../../../contexts/DisplayContext";
import { TaskQuantityDataBox, Text } from "./styles";

export function DataDisplay() {
  const { taskQuantity } = useDisplay();

  return (
    <Box display="flex" gap="4px">
      <TaskQuantityDataBox title="Total Tarefas">
        <Text>{taskQuantity}</Text>
      </TaskQuantityDataBox>
    </Box>
  );
}
