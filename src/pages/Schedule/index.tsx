import { Card } from "./components/Card";
import { EditTask } from "./components/EditTask";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { DisplayProvider } from "./contexts/DisplayContext";
import { PassValuesToEditProvider } from "./contexts/PassValuesToEditContext";
import { useSchedule } from "./contexts/ScheduleContext";
import { Container, MainContainer } from "./styles";

export function Schedule() {
  const { viewOption } = useSchedule();

  return (
    <DisplayProvider>
      <PassValuesToEditProvider>
        <Container>
          {viewOption === "main" && (
            <MainContainer>
              <Header gridarea="config" />
              <Card gridarea="tasks" />
            </MainContainer>
          )}
          {viewOption === "edit" && <EditTask />}
          {viewOption === "new" && <NewTask />}
        </Container>
      </PassValuesToEditProvider>
    </DisplayProvider>
  );
}
