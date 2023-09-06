import { useAgenda } from "../../../../contexts/AgendaContext";
import { CardItem } from "./CardItem";
import { OrganizeCards } from "./styles";

export function Card() {
  const { tarefas } = useAgenda();

  return (
    <OrganizeCards>
      {tarefas.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          startTime={item.startTime}
          endTime={item.endTime}
        />
      ))}
    </OrganizeCards>
  );
}
