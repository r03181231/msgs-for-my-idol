import { useEffect, useState } from "react";
import { LetterContext } from "context/LetterContext";
import GlobalStyle from "GlobalStyle";
import Router from "../src/shared/Router";
import dummyData from "./shared/fakeData.json";

const App = () => {
  const tabData = [
    {
      tabNum: 1,
      writedTo: "정승환",
      $isactive: true,
    },
    {
      tabNum: 2,
      writedTo: "권진아",
      $isactive: false,
    },
    {
      tabNum: 3,
      writedTo: "샘킴",
      $isactive: false,
    },
    {
      tabNum: 4,
      writedTo: "이진아",
      $isactive: false,
    },
  ];

  const [tab, setTab] = useState(tabData[0]);
  const [letterValue, setLetterValue] = useState(dummyData);
  const blankPattern = /^\s+|\s+$/g;
  let time = new Date().toISOString();
  const value = {
    tabData,
    tab,
    setTab,
    letterValue,
    setLetterValue,
    dummyData,
    blankPattern,
    time,
  };

  return (
    <>
      <GlobalStyle />
      <LetterContext.Provider value={value}>
        <Router />
      </LetterContext.Provider>
    </>
  );
};

export default App;
