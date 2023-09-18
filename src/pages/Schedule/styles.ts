import { styled } from "styled-components";

export const Container = styled.div`
  height: 90%;
  width: 800px;
  margin: 16px;
  padding: 16px;
  border-radius: 2px;
  background-color: #4682b4;
  overflow-y: hidden;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    "config"
    "tasks";
  grid-template-rows: 84px 1fr;
  gap: 4px;
  overflow: hidden;
`;
