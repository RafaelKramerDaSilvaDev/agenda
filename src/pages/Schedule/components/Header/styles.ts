import { styled } from "styled-components";

export const HeaderStylized = styled.div<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};

  display: flex;
  flex-direction: column;
  row-gap: 4px;
  border-radius: 2px;
  background-color: #f8f8ff;
  padding: 8px 16px;
`;
