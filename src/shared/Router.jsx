import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "Home";
import Detail from "Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
