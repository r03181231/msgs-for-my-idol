import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import GlobalStyle from "GlobalStyle";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
