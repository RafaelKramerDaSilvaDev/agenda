import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes/router";
import { GlobalStyle } from "./app/styles/GlobalStyle";
import { ScheduleProvider } from "./contexts/ScheduleContext";

function App() {
  return (
    <ChakraProvider>
      <ScheduleProvider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <RouterProvider router={router} />
          <GlobalStyle />
        </div>
      </ScheduleProvider>
    </ChakraProvider>
  );
}

export default App;
