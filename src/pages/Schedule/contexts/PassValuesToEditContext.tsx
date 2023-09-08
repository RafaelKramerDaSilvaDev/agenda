import { ReactNode, createContext, useContext, useState } from "react";
import { TaskProps } from "../../../app/types/TaskProps";

type PassValuesToEditContextType = {
  taskValues: TaskProps;
  setTaskValues: React.Dispatch<React.SetStateAction<TaskProps>>;
};

const PassValuesToEditContext = createContext<PassValuesToEditContextType>(
  {} as PassValuesToEditContextType
);

type PassValuesToEditProviderProps = {
  children: ReactNode;
};

export function PassValuesToEditProvider({
  children,
}: PassValuesToEditProviderProps) {
  const [taskValues, setTaskValues] = useState<TaskProps>({
    id: "",
    name: "",
    description: "",
    startTime: "",
    endTime: "",
  });
  return (
    <PassValuesToEditContext.Provider value={{ setTaskValues, taskValues }}>
      {children}
    </PassValuesToEditContext.Provider>
  );
}

export function usePassValuesToEdit() {
  const context = useContext(PassValuesToEditContext);
  if (context === undefined) {
    throw new Error(
      "usePassValuesToEdit deve ser usado dentro de um PassValuesToEditProvider"
    );
  }
  return context;
}
