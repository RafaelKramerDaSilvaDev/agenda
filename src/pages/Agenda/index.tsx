import { useAgenda } from "../../contexts/AgendaContext";
import { Card } from "./components/Card";
import { EditaTarefa } from "./components/EditaTarefa";
import { Header } from "./components/Header";
import { NovaTarefa } from "./components/NovaTarefa";
import { CardContainer, Container } from "./styles";

export function Agenda() {
  const { option } = useAgenda();

  return (
    <Container>
      <CardContainer>
        <Header />
        <Card />
      </CardContainer>
      {option === "edit" && <EditaTarefa />}
      {option === "new" && <NovaTarefa />}
    </Container>
  );
}
