import { useMessageDisplay } from "../../contexts/MessageDisplayContext";
import { MessageDisplayStylized, Text } from "./styles";

export function MessageDisplay() {
  const { showMessage } = useMessageDisplay();

  return (
    <MessageDisplayStylized>
      <Text>Última Alteração: {showMessage}</Text>
    </MessageDisplayStylized>
  );
}
