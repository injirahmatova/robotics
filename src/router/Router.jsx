import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "../pages/Basket/Basket";
import Home from "../pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
