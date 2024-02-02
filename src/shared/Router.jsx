import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
            // tabData={tabData}
            // letterValue={letterValue}
            // setLetterValue={setLetterValue}
            // tab={tab}
            // setTab={setTab}
            />
          }
        />
        <Route
          path="detail/:id"
          element={
            <Detail
            // tab={tab}
            // setTab={setTab}
            // letterValue={letterValue}
            // setLetterValue={setLetterValue}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
