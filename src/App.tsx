import { Container, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routes from "./routes";
import { GlobalStyle } from "./utils";
import { leftSideStyle } from "./utils/styles/GlobalStyle";
import theme from "./utils/styles/theme";


function App() {
  const { classes: leftsideClasses } = leftSideStyle();

  return (
    <div className="App">
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <GlobalStyle />
          <Container className={leftsideClasses.sideBar} fluid>
          <Header />
          </Container>
          <Routes>{routes}</Routes>
        </MantineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
