import { Card } from "./components/Card";
import { EditTask } from "./components/EditTask";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { PassValuesToEditProvider } from "./contexts/PassValuesToEditContext";
import { useSchedule } from "./contexts/ScheduleContext";
import { CardContainer, Container } from "./styles";

export function Schedule() {
  const { option } = useSchedule();

  return (
    <PassValuesToEditProvider>
      <Container>
        <CardContainer>
          <Header />
          <Card />
        </CardContainer>

        {option === "edit" && <EditTask />}
        {option === "new" && <NewTask />}
      </Container>
    </PassValuesToEditProvider>
  );
}
