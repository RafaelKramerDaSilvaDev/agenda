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
