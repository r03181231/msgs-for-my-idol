import React, { useContext } from "react";
import { LetterContext } from "context/LetterContext.js";
import HeadContents from "component/header/headContents/HeadContents.jsx";
import CardList from "component/main/cardList/CardList.jsx";
import FormAdd from "component/main/addform/formAdd/FormAdd.jsx";
import * as S from "./StyledHome.jsx";

const Home = () => {
  const data = useContext(LetterContext);
  const letterValue = data.letterValue;
  const tabData = data.tabData;
  const tab = data.tab;

  const filterWritedTo = (writedTo) => {
    return letterValue.filter((letterItem) => letterItem.writedTo === writedTo);
  };

  return (
    <S.Layout>
      {/* tabNum, writeTo */}
      <HeadContents />
      {/* tab에 따라 보여주는 컴포넌트 */}
      {tabData.map((tabInfo) => {
        const { tabNum, writedTo } = tabInfo;
        return (
          tab.writedTo === writedTo && (
            <div key={tabNum}>
              <FormAdd tab={tab} tabData={tabData} />
              <CardList letterValue={filterWritedTo(writedTo)} tab={tab} />
            </div>
          )
        );
      })}
    </S.Layout>
  );
};

export default Home;
