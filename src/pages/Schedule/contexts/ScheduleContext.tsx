import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { TaskProps } from '../../../app/types/TaskProps';
import { toDoList } from '../constants/toDoList';

type SortOptions = 'ascending' | 'descending' | 'alphabetical' | 'none' | 'personalized';
type ViewOptions = 'main' | 'new' | 'edit' | 'none';

type ScheduleContextType = {
	tasks: TaskProps[];
	setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
	addTask(Task: Omit<TaskProps, 'id' | 'checked'>): void;
	updateTask(Task: TaskProps): void;
	deleteTask(id: string): void;
	sortOption: SortOptions;
	viewOption: ViewOptions;
	setSortOption(option: SortOptions): void;
	setViewOption(option: ViewOptions): void;
	insertMockedTasks(): void;
	returnToMainView(): void;
	deleteAllTasks(): void;
	reorderTasks(startIndex: number, endIndex: number): void;
};

const ScheduleContext = createContext<ScheduleContextType>({} as ScheduleContextType);

type ScheduleProviderProps = {
	children: ReactNode;
};

export function ScheduleProvider({ children }: ScheduleProviderProps) {
	const initialTasks = () => {
		const storedTasks = localStorage.getItem('tasks');
		return storedTasks ? JSON.parse(storedTasks) : [];
	};

	const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

	console.log('Tasks from Context:', tasks);

	const [sortOption, setSortOption] = useState<SortOptions>('none');
	const [viewOption, setViewOption] = useState<ViewOptions>('main');

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	function sortTasks(tasksToSort: TaskProps[]): TaskProps[] {
		switch (sortOption) {
			case 'ascending':
				return [...tasksToSort].sort((a, b) => (a.position || 0) - (b.position || 0));
			case 'descending':
				return [...tasksToSort].sort((a, b) => (b.position || 0) - (a.position || 0));
			case 'alphabetical':
				return [...tasksToSort].sort((a, b) => a.name.localeCompare(b.name));
			default:
				return tasksToSort;
		}
	}

	useEffect(() => {
		setTasks((prevTasks) => sortTasks(prevTasks));
	}, [sortOption]);

	function addTask(Task: Omit<TaskProps, 'id'>) {
		const lastTask = tasks.length + 1;

		const newTask = {
			id: String(lastTask),
			...Task,
		};
		const newTasksList = [...tasks, newTask];
		setTasks(sortTasks(newTasksList));
	}

	function updateTask(updatedTask: TaskProps) {
		const updatedTasksList = tasks.map((Task) => (Task.id === updatedTask.id ? updatedTask : Task));
		console.log(updatedTask.checked);
		setTasks(sortTasks(updatedTasksList));
	}

	function deleteTask(id: string) {
		const filteredTasks = tasks.filter((Task) => Task.id !== id);
		setTasks(sortTasks(filteredTasks));
	}

	function insertMockedTasks() {
		setTasks(sortTasks([...toDoList]));
	}

	function returnToMainView() {
		setViewOption('main');
	}

	function deleteAllTasks() {
		setTasks([]);
	}

	/**
	 * Reordena a lista de tarefas com base nos índices inicial e final.
	 *
	 * @param startIndex - O índice da tarefa que foi arrastada.
	 * @param endIndex - O índice onde a tarefa foi solta.
	 */
	function reorderTasks(startIndex: number, endIndex: number) {
		// Criando uma cópia da lista de tarefas atual
		const result = Array.from(tasks);

		// Removendo a tarefa do índice inicial (startIndex) da lista copiada
		// O método splice retorna um array dos itens removidos, então [removed] captura o item único removido
		const [removed] = result.splice(startIndex, 1);

		// Inserindo o item removido na posição endIndex da lista copiada
		result.splice(endIndex, 0, removed);

		// Atualizando o estado das tarefas com a lista reordenada
		setTasks(result);
	}

	return (
		<ScheduleContext.Provider
			value={{
				tasks,
				setTasks,
				addTask,
				updateTask,
				deleteTask,
				sortOption,
				viewOption,
				setSortOption,
				setViewOption,
				insertMockedTasks,
				returnToMainView,
				deleteAllTasks,
				reorderTasks,
			}}
		>
			{children}
		</ScheduleContext.Provider>
	);
}

export function useSchedule() {
	const context = useContext(ScheduleContext);
	if (context === undefined) {
		throw new Error('useSchedule deve ser usado dentro de um ScheduleProvider');
	}
	return context;
}
