import styled from 'styled-components';

const baseDataBox = `
  width: 100%;
  padding: 4px 16px;
  background-color: #d8d9da;
  border-radius: 2px;
`;

export const DataBox = styled.div<{ w?: string }>`
	${baseDataBox}
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 8px;
	font-weight: 500;
	width: ${(props) => props.w};
	line-height: 1;
`;
