import React, { useState } from "react";
import { useContext } from "react";
import { LetterContext } from "context/LetterContext";
import * as S from "./StyledTabMenu";

const TabMenu = () => {
  const { setTab, tabData } = useContext(LetterContext);
  const [activeTab, setActiveTab] = useState({ tabNum: 1, writedTo: "정승환" });

  const onClickTabChange = (tabInfomation) => {
    setTab(tabInfomation);
    setActiveTab(tabInfomation);
  };

  return (
    <S.Nav>
      <S.UlArtistName>
        {tabData.map((tabItem) => {
          const { tabNum, writedTo } = tabItem;
          return (
            <S.Li
              key={tabNum}
              id={tabNum}
              $isactive={activeTab.tabNum}
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
