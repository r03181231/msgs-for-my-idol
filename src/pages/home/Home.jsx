import { useSelector } from "react-redux";
import HeadContents from "component/header/headContents/HeadContents.jsx";
import CardList from "component/main/cardList/CardList.jsx";
import FormAdd from "component/main/addform/formAdd/FormAdd.jsx";
import * as S from "./StyledHome.jsx";

const Home = () => {
  const tabData = useSelector((store) => store.letter.tabData);
  const tab = useSelector((store) => store.letter.tab);

  return (
    <S.Layout>
      {/* tabNum, writeTo */}
      <HeadContents />
      {/* tab에 따라 보여주는 컴포넌트 */}
      {tabData.map((tabInfo) => {
        const { tabNum, writedTo } = tabInfo;
        return (
          tab.writedTo === writedTo && (
            <div key={tabNum}>
              <FormAdd />
              <CardList />
            </div>
          )
        );
      })}
    </S.Layout>
  );
};

export default Home;
