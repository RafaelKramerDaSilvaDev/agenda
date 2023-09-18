import { styled } from "styled-components";

export const HeaderStylized = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  border-radius: 2px;
  background-color: #f8f8ff;
  padding: 8px 24px;
  width: 100%;
`;

export const BoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const baseBoxButtons = `
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 4px;
`;

export const BoxLeft = styled.div`
  ${baseBoxButtons}
  justify-content: flex-start;
`;

export const BoxRight = styled.div`
  ${baseBoxButtons}
  justify-content: flex-end;
`;
