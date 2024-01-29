import React from "react";
import * as S from "./StyledHome.jsx";
import HeadContents from "component/header/headContents/HeadContents.jsx";
import CardList from "component/cardList/CardList.jsx";
import FormAdd from "component/main/addform/FormAdd.jsx";

const Home = () => {
  return (
    <S.Layout>
      <HeadContents />
      <FormAdd />
      <CardList />
    </S.Layout>
  );
};

export default Home;
