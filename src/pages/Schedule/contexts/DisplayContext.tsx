import { ReactNode, createContext, useContext, useState } from 'react';
import { useSchedule } from './ScheduleContext';

type DisplayContextType = {
	showLastUpdated: string;
	setLastUpdated: React.Dispatch<React.SetStateAction<string>>;
	taskQuantity: number;
	quantityChecked: number;
};

const DisplayContext = createContext<DisplayContextType>({} as DisplayContextType);

type DisplayProps = {
	children: ReactNode;
};

export function DisplayProvider({ children }: DisplayProps) {
	const { tasks } = useSchedule();
	const [showLastUpdated, setLastUpdated] = useState<string>('Nenhuma alteração');
	const taskQuantity = tasks.length;
	const quantityChecked = tasks.filter((task) => task.checked).length;

	return (
		<DisplayContext.Provider value={{ showLastUpdated, setLastUpdated, taskQuantity, quantityChecked }}>
			{children}
		</DisplayContext.Provider>
	);
}

export function useDisplay() {
	const context = useContext(DisplayContext);
	if (context === undefined) {
		throw new Error('useDisplay deve ser usado dentro de um DisplayProvider');
	}
	return context;
}
