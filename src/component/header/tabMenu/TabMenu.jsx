import { useContext } from "react";
import { LetterContext } from "context/LetterContext";
import * as S from "./StyledTabMenu";

const TabMenu = () => {
  const { setTab, tabData, tab } = useContext(LetterContext);

  const onClickTabChange = (tabInfomation) => {
    setTab(tabInfomation);
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
              $isactive={tab.tabNum}
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
