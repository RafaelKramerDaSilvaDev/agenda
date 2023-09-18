import React, { ReactNode } from "react";
import { BiAddToQueue, BiSolidEdit, BiSolidSave } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp, IoMdHammer } from "react-icons/io";
import { MdOutlineAbc } from "react-icons/md";
import { PiBroomBold } from "react-icons/pi";
import { TbTrashFilled, TbTrashXFilled } from "react-icons/tb";
import { useMessageDisplay } from "../../contexts/MessageDisplayContext";
import { GenericButtonStylized } from "./styles";

type ButtonVariant =
  | "new"
  | "edit"
  | "deleteAll"
  | "delete"
  | "save"
  | "clear"
  | "build"
  | "sortAscending"
  | "sortDescending"
  | "sortAlphabetical";

interface ButtonConfig {
  icon: ReactNode;
  backgroundColor: string;
  message?: string;
  color?: string;
  title?: string;
}

const buttonConfigs: Record<ButtonVariant, ButtonConfig> = {
  new: {
    icon: <BiAddToQueue size={20} color="white" />,
    backgroundColor: "#4682b4",
    message: "Criar tarefa",
    title: "Nova Tarefa",
  },
  edit: {
    icon: <BiSolidEdit size={20} color="white" />,
    backgroundColor: "#DAA520",
    message: "Editar tarefa",
    title: "Editar Tarefa",
  },
  delete: {
    icon: <TbTrashFilled size={20} color="white" />,
    backgroundColor: "#CD5C5C",
    message: "Tarefa excluída",
    title: "Apagar Tarefa",
  },
  deleteAll: {
    icon: <TbTrashXFilled size={20} color="white" />,
    backgroundColor: "#CD5C5C",
    message: "Tarefas excluídas",
    title: "Apagar Todas Tarefas",
  },
  save: {
    icon: <BiSolidSave size={20} color="white" />,
    backgroundColor: "#3CB371",
    message: "Tarefa salva ;)",
    title: "Salvar Tarefa",
  },
  clear: {
    icon: <PiBroomBold size={20} color="white" />,
    backgroundColor: "#778899",
    message: "Campos limpos",
    title: "Limpar campos",
  },
  build: {
    icon: <IoMdHammer size={20} color="white" />,
    backgroundColor: "#A0522D",
    message: "Tarefas geradas",
    title: "Gerar Tarefas",
  },
  sortAscending: {
    icon: <IoIosArrowUp size={20} color="black" />,
    backgroundColor: "#D8D9DA",
    message: "Ordenação crescente",
    title: "Ordenar Crescente",
  },
  sortDescending: {
    icon: <IoIosArrowDown size={20} color="black" />,
    backgroundColor: "#D8D9DA",
    message: "Ordenação decrescente",
    title: "Ordenar Decrescente",
  },
  sortAlphabetical: {
    icon: <MdOutlineAbc size={32} color="black" />,
    backgroundColor: "#D8D9DA",
    message: "Ordenação alfabética",
    title: "Ordem Alfabética",
  },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

function GenericButton({ variant, onClick, ...props }: ButtonProps) {
  const { setMessage } = useMessageDisplay();
  const config = buttonConfigs[variant];

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (config.message) {
      setMessage(config.message);
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <GenericButtonStylized
      style={{ backgroundColor: config.backgroundColor }}
      onClick={handleClick}
      title={config.title}
      {...props}
    >
      {config.icon}
    </GenericButtonStylized>
  );
}

export { GenericButton };
