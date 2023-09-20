import { styled } from 'styled-components';

export const HeaderStylized = styled.div<{ gridarea: string }>`
	grid-area: ${(props) => props.gridarea};

	display: flex;
	flex-direction: column;
	row-gap: 4px;
	border-radius: 2px 2px 0 0;
	background-color: #f8f8ff;
	padding: 8px 16px;
`;
