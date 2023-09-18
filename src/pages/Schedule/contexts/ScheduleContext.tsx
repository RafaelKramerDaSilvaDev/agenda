import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskProps } from "../../../app/types/TaskProps";
import { toDoList } from "../constraints/toDoList";

type ScheduleContextType = {
  tasks: TaskProps[] | undefined;
  addTask(Task: Omit<TaskProps, "id">): void;
  updateTask: (Task: TaskProps) => void;
  deleteTask: (id: string) => void;
  option: string;
  optionSelected(option: string): void;
  insertMockedTasks(): void;
  sortAscending(): void;
  sortDescending(): void;
};

const ScheduleContext = createContext<ScheduleContextType>(
  {} as ScheduleContextType
);

type ScheduleProviderProps = {
  children: ReactNode;
};

export function ScheduleProvider({ children }: ScheduleProviderProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [option, setOption] = useState<string>("new");

  const tasksSortedInAscendingOrder = useMemo(() => {
    // (a.position || 0) - (b.position || 0)) é usado apenas para garantir que nunca será undefined.
    return [...tasks].sort((a, b) => (a.position || 0) - (b.position || 0));
  }, [tasks]);

  const tasksSortedInDescendingOrder = useMemo(() => {
    // (a.position || 0) - (b.position || 0)) é usado apenas para garantir que nunca será undefined.
    return [...tasks].sort((a, b) => (b.position || 0) - (a.position || 0));
  }, [tasks]);

  function optionSelected(option: string) {
    setOption(option);
  }

  function addTask(Task: Omit<TaskProps, "id">) {
    const newTask = {
      id: uuidv4(),
      ...Task,
    };
    setTasks((prevTasks) => prevTasks && [...prevTasks, newTask]);
  }

  function updateTask(updatedTask: TaskProps) {
    setTasks(
      (prevTasks) =>
        prevTasks &&
        prevTasks.map((Task) =>
          Task.id === updatedTask.id ? updatedTask : Task
        )
    );
  }

  function deleteTask(id: string) {
    setTasks(
      (prevTasks) => prevTasks && prevTasks.filter((Task) => Task.id !== id)
    );
  }

  function insertMockedTasks() {
    setTasks(() => [...toDoList]);
  }

  function sortAscending() {
    setTasks(() => [...tasksSortedInAscendingOrder]);
  }

  function sortDescending() {
    setTasks(() => [...tasksSortedInDescendingOrder]);
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
        sortAscending,
        sortDescending,
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
