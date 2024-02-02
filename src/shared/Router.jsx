import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import dummyData from "../shared/fakeData.json";

const Router = () => {
  const tabData = [
    {
      tabNum: 1,
      writedTo: "정승환",
    },
    {
      tabNum: 2,
      writedTo: "권진아",
    },
    {
      tabNum: 3,
      writedTo: "샘킴",
    },
    {
      tabNum: 4,
      writedTo: "이진아",
    },
  ];
  const [letterValue, setLetterValue] = useState(dummyData);
  const [tab, setTab] = useState(tabData[0]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                tabData={tabData}
                letterValue={letterValue}
                setLetterValue={setLetterValue}
                tab={tab}
                setTab={setTab}
              />
            }
          />
          <Route
            path="detail/:id"
            element={
              <Detail
                tab={tab}
                setTab={setTab}
                letterValue={letterValue}
                setLetterValue={setLetterValue}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
