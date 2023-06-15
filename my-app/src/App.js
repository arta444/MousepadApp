import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage.jsx";
import Cart from "./Pages/Cart.jsx"
import Navbar from "./Components/Navbar";
import { ShopContext, ShopContextProvider } from "./Components/Context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
