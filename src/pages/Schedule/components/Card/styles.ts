import { CardProps } from "@chakra-ui/react";
import { styled } from "styled-components";

export const OrganizeCards = styled.div<CardProps>`
  grid-area: ${(props) => props.gridArea};
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  height: 100%;
  overflow-y: auto;
`;

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  color: black;
  transition: all 0.2s;
  background-color: #f8f8ff;
  user-select: none;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const CardName = styled.div`
  font-weight: 600;
`;

export const CardDescription = styled.div``;

export const AlignIconAndText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const StartTimeCard = styled.div``;

export const EndTimeCard = styled.div``;

export const OrganizeButtons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 8px;
  margin-right: 8px;
  border-radius: 2px;
`;
