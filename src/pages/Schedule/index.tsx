import { Card } from "./components/Card";
import { EditTask } from "./components/EditTask";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { MessageDisplayProvider } from "./contexts/MessageDisplayContext";
import { PassValuesToEditProvider } from "./contexts/PassValuesToEditContext";
import { useSchedule } from "./contexts/ScheduleContext";
import { CardContainer, Container } from "./styles";

export function Schedule() {
  const { option } = useSchedule();

  return (
    <MessageDisplayProvider>
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
    </MessageDisplayProvider>
  );
}
