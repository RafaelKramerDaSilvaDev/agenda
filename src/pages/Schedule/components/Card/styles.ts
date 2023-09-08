import { styled } from "styled-components";

export const CardBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  color: black;
  transition: all 0.2s;
  background-color: #f8f8ff;
  cursor: pointer;
  user-select: none;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 48px;
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

export const OrganizeCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  row-gap: 4px;
`;

const ColorSize = `16px`;
const Margins = `16px`;

export const Color = styled.div`
  position: absolute;
  border-radius: 100%;
  background-color: green;
  top: ${Margins};
  left: ${Margins};
  width: ${ColorSize};
  height: ${ColorSize};
`;
