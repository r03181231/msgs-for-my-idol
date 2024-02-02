import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./StyleCardList";

const CardList = ({ originValue, setOriginValue, tabName }) => {
  const navigate = useNavigate();
  const { writedTo } = tabName; //state에 따라
  const storageItems = JSON.parse(localStorage.getItem(writedTo)) || [];
  console.log(storageItems);
  useEffect(() => {
    if (storageItems) {
      setOriginValue([...storageItems]);
    }
  }, []);

  const moveDetailPage = (clickId) => {
    navigate(
      `detail/${clickId}`,
      {
        state: {
          tabName,
          clickId,
        },
      },
      { replace: true }
    );
  };

  return (
    <section>
      {originValue.map((data) => {
        const { id, avatar, content, nickname, createdAt } = data;
        return (
          <section key={id}>
            <div onClick={() => moveDetailPage(id)}>
              <div>
                <img
                  src={avatar}
                  alt="기본이미지"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "50rem",
                  }}
                />
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
      {storageItems.length === 0 ? (
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
