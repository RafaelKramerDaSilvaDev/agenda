import React, { ReactNode } from "react";
import {
  BiAddToQueue,
  BiSolidEdit,
  BiSolidSave,
  BiSolidTrashAlt,
} from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp, IoMdHammer } from "react-icons/io";
import { PiBroomBold } from "react-icons/pi";
import { useMessageDisplay } from "../../contexts/MessageDisplayContext";
import { GenericButtonStylized } from "./styles";

type ButtonVariant =
  | "new"
  | "edit"
  | "delete"
  | "save"
  | "clear"
  | "build"
  | "sortAscending"
  | "sortDescending";

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
    message: "Nova tarefa criada",
    title: "Nova Tarefa",
  },
  edit: {
    icon: <BiSolidEdit size={20} color="white" />,
    backgroundColor: "#DAA520",
    title: "Editar Tarefa",
  },
  delete: {
    icon: <BiSolidTrashAlt size={20} color="white" />,
    backgroundColor: "#CD5C5C",
    title: "Apagar Tarefa",
  },
  save: {
    icon: <BiSolidSave size={20} color="white" />,
    backgroundColor: "#3CB371",
    title: "Salvar Tarefa",
  },
  clear: {
    icon: <PiBroomBold size={20} color="white" />,
    backgroundColor: "#778899",
    title: "Limpar Tarefa",
  },
  build: {
    icon: <IoMdHammer size={20} color="white" />,
    backgroundColor: "#A0522D",
    title: "Gerar Tarefas",
  },
  sortAscending: {
    icon: <IoIosArrowUp size={20} color="black" />,
    backgroundColor: "#D8D9DA", // Exemplo de cor
    title: "Ordenar Crescente",
  },
  sortDescending: {
    icon: <IoIosArrowDown size={20} color="black" />,
    backgroundColor: "#D8D9DA",
    title: "Ordenar Decrescente",
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
