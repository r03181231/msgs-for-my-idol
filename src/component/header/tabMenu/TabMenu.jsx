import React, { useState } from "react";
import * as S from "./StyledTabMenu";

const TabMenu = ({ tabData, setTabName }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]);
  const onClickTabChange = (tabInfomation) => {
    setTabName(tabInfomation);
    setActiveTab(tabInfomation);
  };

  return (
    <S.Nav>
      <S.UlArtistName>
        {tabData.map((sortTab) => {
          const { tabNum, writedTo } = sortTab;
          return (
            <S.Li
              $isactive={activeTab.writedTo === writedTo ? "true" : "false"}
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
