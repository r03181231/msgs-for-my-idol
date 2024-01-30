import React from "react";
import * as S from "./StyledTabMenu";

const TabMenu = ({ tabData, setTabName, setOriginValue }) => {
  const onClickTabChange = (tabInfomation) => {
    const { writedTo } = tabInfomation;
    setTabName(tabInfomation);
    setOriginValue((prevItem) => [{ ...prevItem, writedTo }]);
  };

  return (
    <S.Nav>
      <S.UlArtistName>
        {tabData.map((sortTab) => {
          const { tabNum, writedTo } = sortTab;
          return (
            <li key={tabNum} onClick={() => onClickTabChange(sortTab)}>
              {writedTo}
            </li>
          );
        })}
      </S.UlArtistName>
    </S.Nav>
  );
};

export default TabMenu;
