import React, { useState } from "react";
import { useContext } from "react";
import { LetterContext } from "context/LetterContext";
import * as S from "./StyledTabMenu";

const TabMenu = () => {
  const { setTab, tabData } = useContext(LetterContext);
  const [activeTab, setActiveTab] = useState(tabData[0]);

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
              key={tabNum}
              id={tabNum}
              $isactive={activeTab.tabNum}
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
