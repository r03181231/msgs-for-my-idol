import TabMenu from "../tabMenu/TabMenu";
import * as S from "./StyledHeadContents";

const HeadContents = ({ tabData, setTabName }) => {
  return (
    <S.Header>
      <h1>안테나-엔젤스에게 보내는 MSGs</h1>
      <TabMenu tabData={tabData} setTabName={setTabName} />
    </S.Header>
  );
};

export default HeadContents;
