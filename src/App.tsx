import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes/router';
import { GlobalStyle } from './app/styles/GlobalStyle';
import { ScheduleProvider } from './pages/Schedule/contexts/ScheduleContext';

function App() {
	return (
		<ScheduleProvider>
			<ChakraProvider>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
						backgroundColor: '#AED2FF',
					}}
				>
					<RouterProvider router={router} />
					<GlobalStyle />
				</div>
			</ChakraProvider>
		</ScheduleProvider>
	);
}

export default App;
