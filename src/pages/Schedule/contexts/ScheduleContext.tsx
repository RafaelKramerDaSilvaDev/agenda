import { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskProps } from "../../../app/types/TaskProps";
import { toDoList } from "../constraints/toDoList";

type SortOptions = "new" | "ascending" | "descending" | "alphabetical";

type ScheduleContextType = {
  tasks: TaskProps[];
  addTask(Task: Omit<TaskProps, "id">): void;
  updateTask(Task: TaskProps): void;
  deleteTask(id: string): void;
  option: SortOptions;
  optionSelected(option: SortOptions): void;
  insertMockedTasks(): void;
};

const ScheduleContext = createContext<ScheduleContextType>(
  {} as ScheduleContextType
);

type ScheduleProviderProps = {
  children: ReactNode;
};

export function ScheduleProvider({ children }: ScheduleProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [option, setOption] = useState<SortOptions>("new");

  function sortTasks(tasksToSort: TaskProps[]): TaskProps[] {
    switch (option) {
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

  function optionSelected(selectedOption: SortOptions) {
    setOption(selectedOption);
    // Once the option is changed, re-sort the tasks.
    setTasks((prevTasks) => sortTasks(prevTasks));
  }

  return (
    <ScheduleContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        option,
        optionSelected,
        insertMockedTasks,
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
