import { styled } from "styled-components";
import { BaseButton } from "../../styles";

export const HeaderStylized = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  background-color: #f8f8ff;
  padding: 8px 24px;
`;

export const NewButton = styled.div`
  ${BaseButton}
  background-color: #4682b4;
`;
