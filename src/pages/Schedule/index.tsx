import { useSchedule } from "../../contexts/ScheduleContext";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { CardContainer, Container } from "./styles";

export function Schedule() {
  const { option } = useSchedule();

  return (
    <Container>
      <CardContainer>
        <Header />
        <Card />
      </CardContainer>
      {/* {option === "edit" && <EditTask />} */}
      {option === "new" && <NewTask />}
    </Container>
  );
}
