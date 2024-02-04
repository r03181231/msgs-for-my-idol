import GlobalStyle from "GlobalStyle";
import Router from "../src/shared/Router";
import dummyData from "./shared/fakeData.json";
import { useState } from "react";
import { LetterContext } from "context/LetterContext";

const App = () => {
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
  const value = {
    tabData,
    tab,
    setTab,
    letterValue,
    setLetterValue,
    dummyData,
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
