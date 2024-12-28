import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Cart" exact element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
