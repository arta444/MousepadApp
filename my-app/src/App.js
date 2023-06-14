import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
