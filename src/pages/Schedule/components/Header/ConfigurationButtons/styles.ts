import styled from "styled-components";

export const ConfigurationButtonsStylized = styled.div`
  display: flex;
  justify-content: space-between;
`;

const baseBoxOrganizeButtons = `
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 4px;
`;

export const BoxLeft = styled.div`
  ${baseBoxOrganizeButtons}
  justify-content: flex-start;
`;

export const BoxRight = styled.div`
  ${baseBoxOrganizeButtons}
  justify-content: flex-end;
`;
