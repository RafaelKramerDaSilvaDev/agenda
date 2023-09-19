import styled from "styled-components";

const baseDataBox = `
  width: 100%;
  padding: 4px 16px;
  background-color: #d8d9da;
  border-radius: 2px;
`;

export const TaskQuantityDataBox = styled.div`
  ${baseDataBox}
  display: flex;
  justify-content: center;
  width: 64px;
`;

export const DataBox = styled.div`
  ${baseDataBox}
`;

export const Text = styled.h1`
  font-weight: 500;
`;
