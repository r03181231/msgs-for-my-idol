import React, { useState } from "react";
import { useContext } from "react";
import { LetterContext } from "context/LetterContext";
import * as S from "./StyledTabMenu";
import { useDispatch, useSelector } from "react-redux";
// import { setTab } from "../../../redux/modules/tab";
// import { setActiveTab, setTab } from "../../../redux/modules/tab";

const TabMenu = () => {
  const dispatch = useDispatch();
  const tabData = useSelector((store) => store.tabMenu.tabData);
  // const activeTab = useSelector((store) => store.tab.activeTab);
  const data = useContext(LetterContext);
  const setTab = data.setTab;
  const [activeTab, setActiveTab] = useState(tabData[0]);
  // console.log(activeTab); //{tabNum: 4, writedTo: '이진아'}
  const onClickTabChange = (tabInfomation) => {
    // console.log(tabInfomation); //{tabNum: 4, writedTo: '이진아'}
    // dispatch(setTab(tabInfomation));
    setTab(tabInfomation);
    setActiveTab(tabInfomation);
    // dispatch(setActiveTab(tabInfomation));
  };

  return (
    <S.Nav>
      <S.UlArtistName>
        {tabData.map((tabItem) => {
          const { tabNum, writedTo } = tabItem;
          return (
            <S.Li
              id={tabNum}
              $isactive={activeTab.tabNum}
              key={tabNum}
              onClick={() => onClickTabChange(tabItem)}
            >
              {writedTo}
            </S.Li>
          );
        })}
      </S.UlArtistName>
    </S.Nav>
  );
};

export default TabMenu;
