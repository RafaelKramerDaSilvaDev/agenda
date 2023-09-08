import { useSchedule } from "../../contexts/ScheduleContext";
import { CardItem } from "./CardItem";
import { OrganizeCards } from "./styles";

export function Card() {
  const { tasks } = useSchedule();

  return (
    <OrganizeCards>
      {tasks?.map((item) => (
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
