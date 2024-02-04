import { useNavigate } from "react-router-dom";
import * as S from "./StyleCardList";

const CardList = ({ letterValue, tab }) => {
  const navigate = useNavigate();
  const { writedTo } = tab; //state에 따라

  const moveDetailPage = (clickId) => {
    navigate(`detail/${clickId}`, { replace: true });
  };

  return (
    <section>
      {letterValue.map((letterData) => {
        const { id, avatar, content, nickname, createdAt } = letterData;
        return (
          <section key={id}>
            <div onClick={() => moveDetailPage(id)}>
              <div>
                <S.AvatarImg src={avatar} alt="기본이미지" />
                <div>
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
                  <S.contentP>{content}</S.contentP>
                </div>
              </div>
            </div>
          </section>
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
    </section>
  );
};

export default CardList;
