import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddItemDetails from "./pages/AddItemDetails";
import Cart from "./pages/Cart";
import CollapsedDetails from "./pages/CollapsedDetails";
import Landing from "./pages/Landing";
import Payment from "./pages/Payment";
import ResturentDetails from "./pages/ResturentDetails";
import ResturentList from "./pages/ResturentList";
import { GlobalStyle } from "./utils";
import theme from "./utils/styles/theme";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MantineProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/home" element={<ResturentList />}></Route>
            <Route path="/home/trending" element={<ResturentList />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/details" element={<ResturentDetails />}></Route>
            <Route path="/add-item" element={<AddItemDetails />}></Route>
            <Route path="/collapsed" element={<CollapsedDetails />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
