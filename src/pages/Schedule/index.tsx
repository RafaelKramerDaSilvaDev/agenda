import { Card } from "./components/Card";
import { EditTask } from "./components/EditTask";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { MessageDisplayProvider } from "./contexts/MessageDisplayContext";
import { PassValuesToEditProvider } from "./contexts/PassValuesToEditContext";
import { useSchedule } from "./contexts/ScheduleContext";
import { Container, MainContainer } from "./styles";

export function Schedule() {
  const { viewOption } = useSchedule();

  return (
    <MessageDisplayProvider>
      <PassValuesToEditProvider>
        <Container>
          <MainContainer>
            <Header gridArea="config" />
            <Card gridArea="tasks" />
          </MainContainer>
          {viewOption === "edit" && <EditTask />}
          {viewOption === "new" && <NewTask />}
        </Container>
      </PassValuesToEditProvider>
    </MessageDisplayProvider>
  );
}
