import { styled } from "styled-components";

export const Container = styled.div`
  width: 800px;
  margin: 16px;
  padding: 16px;
  border-radius: 2px;
  background-color: #4682b4;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    "config"
    "tasks";
  grid-template-rows: 120px auto;
  gap: 4px;
  height: calc(100vh - 84px);
`;
