import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskProps } from "../../../app/types/TaskProps";
import { toDoList } from "../constraints/toDoList";

type SortOptions = "ascending" | "descending" | "alphabetical" | "none";
type ViewOptions = "main" | "new" | "edit" | "none";

type ScheduleContextType = {
  tasks: TaskProps[];
  addTask(Task: Omit<TaskProps, "id">): void;
  updateTask(Task: TaskProps): void;
  deleteTask(id: string): void;
  sortOption: SortOptions;
  viewOption: ViewOptions;
  setSortOption(option: SortOptions): void;
  setViewOption(option: ViewOptions): void;
  insertMockedTasks(): void;
  returnToMainView(): void;
};

const ScheduleContext = createContext<ScheduleContextType>(
  {} as ScheduleContextType
);

type ScheduleProviderProps = {
  children: ReactNode;
};

export function ScheduleProvider({ children }: ScheduleProviderProps) {
  const initialTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);
  const [sortOption, setSortOption] = useState<SortOptions>("none");
  const [viewOption, setViewOption] = useState<ViewOptions>("main");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function sortTasks(tasksToSort: TaskProps[]): TaskProps[] {
    switch (sortOption) {
      case "ascending":
        return [...tasksToSort].sort(
          (a, b) => (a.position || 0) - (b.position || 0)
        );
      case "descending":
        return [...tasksToSort].sort(
          (a, b) => (b.position || 0) - (a.position || 0)
        );
      case "alphabetical":
        return [...tasksToSort].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return tasksToSort;
    }
  }

  useEffect(() => {
    setTasks((prevTasks) => sortTasks(prevTasks));
  }, [sortOption]);

  function addTask(Task: Omit<TaskProps, "id">) {
    const newTask = {
      id: uuidv4(),
      ...Task,
    };
    const newTasksList = [...tasks, newTask];
    setTasks(sortTasks(newTasksList));
  }

  function updateTask(updatedTask: TaskProps) {
    const updatedTasksList = tasks.map((Task) =>
      Task.id === updatedTask.id ? updatedTask : Task
    );
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
    setViewOption("main");
  }

  return (
    <ScheduleContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        sortOption,
        viewOption,
        setSortOption,
        setViewOption,
        insertMockedTasks,
        returnToMainView,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  const context = useContext(ScheduleContext);
  if (context === undefined) {
    throw new Error("useSchedule deve ser usado dentro de um ScheduleProvider");
  }
  return context;
}
