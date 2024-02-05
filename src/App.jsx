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
  const storageItem = JSON.parse(localStorage.getItem(tab.writedTo));
  const [letterValue, setLetterValue] = useState(storageItem || dummyData);
  const value = {
    tabData,
    tab,
    setTab,
    letterValue,
    setLetterValue,
    dummyData,
  };
  useEffect(() => {
    const storageItem = JSON.parse(localStorage.getItem(tab.writedTo));
    if (storageItem) {
      setLetterValue(storageItem);
    } else {
      setLetterValue(dummyData);
    }
  }, [tab.writedTo]);

  useEffect(() => {
    localStorage.setItem(tab.writedTo, JSON.stringify(letterValue));
  }, [tab.writedTo, letterValue]);

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
