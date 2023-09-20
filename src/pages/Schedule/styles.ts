import { styled } from 'styled-components';

export const Container = styled.div`
	width: 800px;
	border-radius: 2px;
	background-color: #4682b4;
`;

export const MainContainer = styled.div`
	display: grid;
	grid-template-areas:
		'config'
		'tasks';
	grid-template-rows: 120px auto;
	height: 100vh;

	@media (min-width: 769px) {
		height: calc(100vh - 84px);
	}
`;
