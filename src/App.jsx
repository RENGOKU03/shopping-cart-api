import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./index.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ErrorRoute from "./components/ErrorRoute";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route errorElement={<ErrorRoute />} path="*" />
      </Routes>
    </>
  );
}

export default App;
