import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routes from "./routes";
import { GlobalStyle } from "./utils";
import theme from "./utils/styles/theme";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <GlobalStyle /> 
          <Header />
          <Routes>
            {routes}
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
