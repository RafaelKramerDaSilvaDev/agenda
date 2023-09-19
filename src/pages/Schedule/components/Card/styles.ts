import { styled } from "styled-components";

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
  color: #1a202c;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

export const TaskName = styled.div`
  font-weight: 600;
`;

export const CardDescription = styled.div`
  font-weight: 500;
`;

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

const size = "32px";

export const TaskId = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: ${size};
  height: ${size};
  background-color: #64ccc5;
  padding: 4px;

  font-size: 20px;
  line-height: 1;
  font-weight: 800;
  color: white;
`;

export const TopTaskBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
