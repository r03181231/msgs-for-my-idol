import TabMenu from "../tabMenu/TabMenu";
import * as S from "./StyledHeadContents";

const HeadContents = () => {
  return (
    <S.Header>
      <h1>안테나-엔젤스에게 보내는 MSGs</h1>
      <TabMenu />
    </S.Header>
  );
};

export default HeadContents;
