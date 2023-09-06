import { ReactNode, createContext, useContext, useState } from "react";
import { listaDeTarefas } from "../pages/Agenda/constraints/listaDeTarefas";
import { TarefaProps } from "../pages/Agenda/types/TarefaProps";

type AgendaContextType = {
  tarefas: TarefaProps[];
  addTarefa: (tarefa: TarefaProps) => void;
  updateTarefa: (tarefa: TarefaProps) => void;
  deleteTarefa: (id: string) => void;
  option: string;
  optionSelected(option: string): void;
};

const AgendaContext = createContext<AgendaContextType>({} as AgendaContextType);

type AgendaProviderProps = {
  children: ReactNode;
};

export function AgendaProvider({ children }: AgendaProviderProps) {
  const [tarefas, setTarefas] = useState<TarefaProps[]>([...listaDeTarefas]);
  const [option, setOption] = useState<string>("");

  function optionSelected(option: string) {
    setOption(option);
  }

  function addTarefa(tarefa: TarefaProps) {
    setTarefas((prevTarefas) => [...prevTarefas, tarefa]);
  }

  function updateTarefa(updatedTarefa: TarefaProps) {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === updatedTarefa.id ? updatedTarefa : tarefa
      )
    );
  }

  function deleteTarefa(id: string) {
    setTarefas((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.id !== id)
    );
  }

  return (
    <AgendaContext.Provider
      value={{
        tarefas,
        addTarefa,
        updateTarefa,
        deleteTarefa,
        option,
        optionSelected,
      }}
    >
      {children}
    </AgendaContext.Provider>
  );
}

export function useAgenda() {
  const context = useContext(AgendaContext);
  if (context === undefined) {
    throw new Error("useAgenda deve ser usado dentro de um AgendaProvider");
  }
  return context;
}
