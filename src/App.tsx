import { GlobalStyle } from "./app/styles/GlobalStyle";
import { AgendaProvider } from "./contexts/AgendaContext";
import { Agenda } from "./pages/Agenda";

function App() {
  return (
    <AgendaProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Agenda />
        <GlobalStyle />
      </div>
    </AgendaProvider>
  );
}

export default App;
