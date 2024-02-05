import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
  const [tab, setTab] = useState(tabData[0]);
  const [letterValue, setLetterValue] = useState(dummyData);

  // useEffect(() => {
  //   const storageItem = JSON.parse(localStorage.getItem(tab.writedTo));
  //   if (storageItem) {
  //     setLetterValue(storageItem);
  //   } else {
  //     setLetterValue(dummyData);
  //   }
  // }, [tab.writedTo]);

  // const storageItem = JSON.parse(localStorage.getItem(tab.writedTo));
  // const [letterValue, setLetterValue] = useState(storageItem || dummyData);
  // const [letterValue, setLetterValue] = useState(dummyData || []);
  // useEffect(() => {
  //   localStorage.setItem(tab.writedTo, JSON.stringify(letterValue || []));
  // }, [tab.writedTo, letterValue]);
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
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
