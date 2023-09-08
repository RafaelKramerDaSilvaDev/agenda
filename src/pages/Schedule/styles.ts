import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "tasks form";
  grid-template-columns: 50%;
  column-gap: 16px;
  height: 90%;
  width: 70%;
  margin: 16px;
  padding: 16px;
  border-radius: 2px;
  background-color: #4682b4;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  overflow-y: auto;
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
