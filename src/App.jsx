import GlobalStyle from "GlobalStyle";
import Router from "../src/shared/Router";
import { useState } from "react";
import dummyData from "./shared/fakeData.json";
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
  let time = new Date().toISOString();
  const blankPattern = /^\s+|\s+$/g;
  return (
    <>
      <GlobalStyle />
      <LetterContext.Provider
        value={{
          tabData,
          tab,
          setTab,
          letterValue,
          setLetterValue,
          dummyData,
          blankPattern,
          time,
        }}
      >
        <Router />
      </LetterContext.Provider>
    </>
  );
};

export default App;
