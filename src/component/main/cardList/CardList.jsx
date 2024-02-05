import { useNavigate } from "react-router-dom";
import * as S from "./StyleCardList";

const CardList = ({ letterValue, tab }) => {
  const navigate = useNavigate();
  const { writedTo } = tab; //state에 따라

  const moveDetailPage = (clickId) => {
    navigate(`detail/${clickId}`, { replace: true });
  };

  return (
    <S.CardSection>
      {letterValue.map((letterData) => {
        const { id, avatar, content, nickname, createdAt } = letterData;
        return (
          <S.LetterWapperDiv key={id}>
            <S.UserInfoDiv onClick={() => moveDetailPage(id)}>
              <S.ImgWapperDiv>
                <S.AvatarImg src={null ?? avatar} alt="기본이미지" />
              </S.ImgWapperDiv>
              <S.NicknameNdDateDiv>
                <p>{nickname}</p>
                <p>
                  {new Date(createdAt).toLocaleDateString("ko-KR", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </p>
                <S.ContentP>{content}</S.ContentP>
              </S.NicknameNdDateDiv>
            </S.UserInfoDiv>
          </S.LetterWapperDiv>
        );
      })}
      {letterValue.length === 0 ? (
        <div>
          <p>
            {writedTo}님에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이
            되주세요!
          </p>
        </div>
      ) : null}
    </S.CardSection>
  );
};

export default CardList;
