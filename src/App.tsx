import { Container, MantineProvider, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routes from "./routes";
import { GlobalStyle } from "./utils";
import { leftSideStyle } from "./utils/styles/GlobalStyle";
import theme from "./utils/styles/theme";


function App() {
  const { classes: leftsideClasses } = leftSideStyle();
  const mantinetheme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${mantinetheme.breakpoints.sm})`);

  return (
    <div className="App">
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <GlobalStyle />
          <Container className={mobile? leftsideClasses.sideBar : leftsideClasses.webSideBar} fluid>
          <Header />
          </Container>
          <Routes>{routes}</Routes>
        </MantineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
