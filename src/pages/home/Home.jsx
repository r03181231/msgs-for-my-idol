import React, { useState } from "react";
import * as S from "./StyledHome.jsx";
import HeadContents from "component/header/headContents/HeadContents.jsx";
import CardList from "component/main/cardList/CardList.jsx";
import FormAdd from "component/main/addform/formAdd/FormAdd.jsx";
import { v4 as randomId } from "uuid";
import UseInputs from "component/common/UseInputs.jsx";

const Home = () => {
  let [time, setTime] = useState(new Date());
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
  const [tabName, setTabName] = useState(tabData[0]);

  const [originValue, setOriginValue, onChange, reset] = UseInputs({
    id: randomId(),
    nickname: "나나",
    avatar: "../../../../assets/images/user-defult-avatar.png",
    content: "어어그래",
    writedTo: tabName.writedTo,
    createdAt: time,
  });
  const blankPattern = /^\s+|\s+$/g;

  return (
    <S.Layout>
      {/* tabNum, writeTo */}
      <HeadContents
        setTabName={setTabName}
        tabData={tabData}
        setOriginValue={setOriginValue}
      />
      <FormAdd
        setTabName={setTabName}
        originValue={originValue}
        setOriginValue={setOriginValue}
        blankPattern={blankPattern}
        time={time}
      />
      <CardList originValue={originValue} tabData={tabData} tabName={tabName} />
    </S.Layout>
  );
};

export default Home;
