import { styled } from "styled-components";

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  color: black;
  transition: all 0.2s;
  width: 600px;
  background-color: #f8f8ff;
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  cursor: pointer;
  user-select: none;

  &&:hover {
    color: #f8f8ff;
    border-color: #f8f8ff;
    background-color: #4682b4;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 24px;
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
  background-color: #f8f8ff;
  flex-direction: column;
  row-gap: 4px;
  padding: 8px;
  margin-right: 8px;
  border-radius: 2px;
`;

export const OrganizeCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  row-gap: 4px;
`;
