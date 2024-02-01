import React, { useState } from "react";
import * as S from "./StyledHome.jsx";
import HeadContents from "component/header/headContents/HeadContents.jsx";
import CardList from "component/main/cardList/CardList.jsx";
import FormAdd from "component/main/addform/formAdd/FormAdd.jsx";
import useInputs from "component/common/useInputs.jsx";
import dataBase from "../../../src/shared/fakeData.json";

const Home = () => {
  const dummyData = dataBase;
  console.log(dummyData);
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
  const blankPattern = /^\s+|\s+$/g;
  let [time, setTime] = useState(new Date().toISOString());
  const [tabName, setTabName] = useState(tabData[0]);
  console.log(tabName.writedTo);
  const writorName = tabName.writedTo;
  const [originValue, setOriginValue, onChange, reset] = useInputs(
    ...dummyData
  );
  console.log(originValue);
  const filterDummy = dummyData.filter(
    (stayData) => stayData.writedTo === tabName.writedTo
  );
  // localStorage.setItem(writorName, JSON.stringify(filterDummy));

  return (
    <S.Layout>
      {/* tabNum, writeTo */}
      <HeadContents setTabName={setTabName} tabData={tabData} />
      <FormAdd
        writorName={writorName}
        tabName={tabName}
        tabData={tabData}
        originValue={originValue}
        setOriginValue={setOriginValue}
        blankPattern={blankPattern}
        time={time}
      />
      {/* tab에 따라 보여주는 컴포넌트 */}
      <CardList
        setOriginValue={setOriginValue}
        tabName={tabName}
        originValue={originValue}
      />
    </S.Layout>
  );
};

export default Home;
