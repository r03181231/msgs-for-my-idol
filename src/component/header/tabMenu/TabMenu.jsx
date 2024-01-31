import React from "react";
import * as S from "./StyledTabMenu";

const TabMenu = ({ tabData, setTabName, setOriginValue }) => {
  const onClickTabChange = (tabInfomation) => {
    // const { writedTo } = tabInfomation; //원인
    setTabName(tabInfomation);
    // 와 오류의 대부분을 담당하던 아이...
    // setOriginValue((prevItem) => [{ ...prevItem, writedTo }]); //원인
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
