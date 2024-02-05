import React, { useState } from "react";
import * as S from "./StyledTabMenu";

const TabMenu = ({ tabData, setTab }) => {
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
