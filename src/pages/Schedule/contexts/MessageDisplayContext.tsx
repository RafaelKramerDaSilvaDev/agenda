import { ReactNode, createContext, useContext, useState } from "react";

type MessageDisplayContextType = {
  showMessage: string;
  setMessage(message: string): void;
};

const MessageDisplayContext = createContext<MessageDisplayContextType>(
  {} as MessageDisplayContextType
);

type MessageDisplayProps = {
  children: ReactNode;
};

export function MessageDisplayProvider({ children }: MessageDisplayProps) {
  const [showMessage, setShowMessage] = useState<string>("Nenhuma");

  function setMessage(message: string) {
    setShowMessage(message);
  }

  return (
    <MessageDisplayContext.Provider value={{ showMessage, setMessage }}>
      {children}
    </MessageDisplayContext.Provider>
  );
}

export function useMessageDisplay() {
  const context = useContext(MessageDisplayContext);
  if (context === undefined) {
    throw new Error(
      "useMessageDisplay deve ser usado dentro de um MessageDisplayProvider"
    );
  }
  return context;
}
