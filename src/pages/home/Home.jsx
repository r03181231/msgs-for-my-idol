import React, { useState } from "react";
import * as S from "./StyledHome.jsx";
import HeadContents from "component/header/headContents/HeadContents.jsx";
import CardList from "component/main/cardList/CardList.jsx";
import FormAdd from "component/main/addform/formAdd/FormAdd.jsx";

const Home = ({ letterValue, setLetterValue, tab, setTab, tabData }) => {
  const blankPattern = /^\s+|\s+$/g;
  let time = new Date().toISOString();

  console.log(tab.writedTo);
  const writeToName = tab.writedTo;

  const filterWritedTo = (writedTo) => {
    return letterValue.filter((letterItem) => letterItem.writedTo === writedTo);
  };

  return (
    <S.Layout>
      {/* tabNum, writeTo */}
      <HeadContents setTab={setTab} tabData={tabData} tab={tab} />
      {/* tab에 따라 보여주는 컴포넌트 */}
      {tabData.map((tabInfo) => {
        const { tabNum, writedTo } = tabInfo;
        return (
          tab.writedTo === writedTo && (
            <div key={tabNum}>
              <FormAdd
                writeToName={writeToName}
                tab={tab}
                tabData={tabData}
                setLetterValue={setLetterValue}
                blankPattern={blankPattern}
                time={time}
              />
              <CardList
                letterValue={filterWritedTo(writedTo)}
                setLetterValue={setLetterValue}
                tab={tab}
              />
            </div>
          )
        );
      })}
    </S.Layout>
  );
};

export default Home;
