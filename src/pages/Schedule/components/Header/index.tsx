import styled from "styled-components";
import { useMessageDisplay } from "../../contexts/MessageDisplayContext";
import { useSchedule } from "../../contexts/ScheduleContext";
// import {
//   BuildButton,
//   NewButton,
//   SortAscendingButton,
//   SortDescendingButton,
// } from "../Buttons";
import { GenericButton } from "../Buttons";
import { BoxBottom, BoxLeft, BoxRight, HeaderStylized } from "./styles";

export function Header() {
  const { optionSelected, insertMockedTasks, sortAscending, sortDescending } =
    useSchedule();
  const { showMessage } = useMessageDisplay();

  return (
    <HeaderStylized>
      <MessageDisplay>
        <Text>{showMessage}</Text>
      </MessageDisplay>
      <BoxBottom>
        <BoxLeft>
          <GenericButton variant="new" onClick={() => optionSelected("new")} />
          <GenericButton variant="build" onClick={insertMockedTasks} />
        </BoxLeft>
        <BoxRight>
          <GenericButton variant="sortAscending" onClick={sortAscending} />
          <GenericButton variant="sortDescending" onClick={sortDescending} />
        </BoxRight>
      </BoxBottom>
    </HeaderStylized>
  );
}

const MessageDisplay = styled.div`
  width: 100%;
  padding: 4px 16px;
  background-color: #d8d9da;
  border-radius: 2px;
`;

const Text = styled.h1`
  font-weight: 500;
`;
