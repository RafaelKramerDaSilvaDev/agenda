import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 90%;
  flex-direction: row;
  gap: 16px;
  margin: 16px;
  padding: 16px;
  border-radius: 2px;
  background-color: #4682b4;
  overflow-y: scroll;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BaseButton = `
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
