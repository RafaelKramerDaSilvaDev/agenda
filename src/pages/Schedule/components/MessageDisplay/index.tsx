import { useMessageDisplay } from "../../contexts/MessageDisplayContext";
import { MessageDisplayStylized, Text } from "./styles";

export function MessageDisplay() {
  const { showMessage } = useMessageDisplay();

  return (
    <MessageDisplayStylized>
      <Text>{showMessage}</Text>
    </MessageDisplayStylized>
  );
}
