import React from "react";
import dataBase from "../../../shared/fakeData.json";
import { useLocation, useNavigate } from "react-router-dom";

const CardList = ({ originValue, setOriginValue, tabName }) => {
  console.log(originValue);
  const navigate = useNavigate();
  const locationData = useLocation();
  console.log(locationData);
  const { writedTo } = tabName; //state에 따라
  const dummyData = dataBase;
  const filterDummy = dummyData.filter((dummy) => dummy.writedTo === writedTo);
  const filterOrigin = originValue.filter(
    (origin) => origin.writedTo === writedTo
  );
  console.log(filterOrigin);
  const originNdDummy = [...originValue, ...filterDummy];
  console.log(originNdDummy);

  const triggerCard = (clickId) => {
    navigate(
      `detail/${clickId}`,
      {
        state: {
          tabName: tabName,
          originNdDummy: originNdDummy,
          originValue: originValue,
        },
      },
      { replace: true }
    );
  };

  return (
    <section>
      <div>{writedTo}의 CardList</div>
      {originNdDummy.map((data) => {
        const { id, avatar, content, nickname, createdAt } = data;
        return (
          <section key={id}>
            {/* <Link to={`datail/${id}`}> */}
            <div onClick={(e) => triggerCard(id)}>
              <div>
                <img src={avatar} alt="기본이미지" />
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
