import React, { useState } from "react";
import * as S from "./StyledHome.jsx";
import HeadContents from "component/header/headContents/HeadContents.jsx";
import CardList from "component/main/cardList/CardList.jsx";
import FormAdd from "component/main/addform/formAdd/FormAdd.jsx";
import useInputs from "component/common/useInputs.jsx";
// import { v4 as randomId } from "uuid";

const Home = () => {
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
  let [time, setTime] = useState(new Date());

  const [tabName, setTabName] = useState(tabData[0]);
  console.log(tabName.writedTo);
  // const normalAvataUrl = "../../../../assets/images/anthena-angels.png";
  const [originValue, setOriginValue, onChange, reset] = useInputs([]);
  const filterWritedTo = (writedTo) => {
    return originValue.filter((originItem) => originItem.writedTo === writedTo);
  };

  return (
    <S.Layout>
      {/* tabNum, writeTo */}
      <HeadContents
        setTabName={setTabName}
        tabData={tabData}
        setOriginValue={setOriginValue}
      />
      <FormAdd
        tabName={tabName}
        originValue={originValue}
        tabData={tabData}
        setOriginValue={setOriginValue}
        blankPattern={blankPattern}
        time={time}
      />

      {tabData.map((tabInfo) => {
        const { tabNum, writedTo } = tabInfo;
        return (
          tabName.writedTo === writedTo && (
            <CardList
              key={tabNum}
              originValue={filterWritedTo(writedTo)}
              setOriginValue={setOriginValue}
              tabName={tabName}
            />
          )
        );
      })}
      {/* tab에 따라 보여주는 컴포넌트 */}
    </S.Layout>
  );
};

export default Home;
