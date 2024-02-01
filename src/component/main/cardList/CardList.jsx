import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CardList = ({ originValue, setOriginValue, tabName }) => {
  console.log(originValue);

  const navigate = useNavigate();
  const { writedTo } = tabName; //state에 따라
  const storageItems = JSON.parse(localStorage.getItem(writedTo));
  useEffect(() => {
    if (storageItems) {
      setOriginValue([...storageItems]);
    }
  }, []);

  const moveDetailPage = (clickId) => {
    console.log(`detail/${clickId}`);
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
      <div>{writedTo}의 CardList</div>
      {originValue.map((data) => {
        const { id, avatar, content, nickname, createdAt } = data;
        return (
          <section key={id}>
            {/* <Link to={`datail/${id}`}> */}
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
                  <p>{content}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default CardList;
