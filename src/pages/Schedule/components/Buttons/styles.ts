import { styled } from "styled-components";

const BaseButton = `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  
  &&:hover {
    scale: 1.04;
  }

  &&:active {
    scale: 1.1;
  }
`;

export const GenericButtonStylized = styled.button`
  ${BaseButton}
`;
