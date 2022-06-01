import logo from "./logo.svg";
import React from "react";
// import { Signin } from "./pages/Signin";
import { Dashbaord, AddNewProduct, Signin } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dash from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="dashboard" element={<Dashbaord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
