import React, { useState } from "react";
import * as S from "./StyledTabMenu";

const TabMenu = ({ tabData, setTab }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]);
  console.log(activeTab);

  const onClickTabChange = (tabInfomation) => {
    setTab(tabInfomation);
    setActiveTab(tabInfomation);
  };

  return (
    <S.Nav>
      <S.UlArtistName>
        {tabData.map((sortTab) => {
          const { tabNum, writedTo } = sortTab;

          return (
            <S.Li
              id={tabNum}
              $isactive={activeTab.tabNum}
              key={tabNum}
              onClick={() => onClickTabChange(sortTab)}
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
