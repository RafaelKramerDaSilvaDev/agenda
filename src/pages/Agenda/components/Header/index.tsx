import { BiAddToQueue } from "react-icons/bi";
import { useAgenda } from "../../../../contexts/AgendaContext";
import { HeaderStylized, NewButton } from "./styles";

export function Header() {
  const { optionSelected } = useAgenda();

  return (
    <HeaderStylized>
      <NewButton onClick={() => optionSelected("new")}>
        <BiAddToQueue size={20} color="white" />
      </NewButton>
    </HeaderStylized>
  );
}
