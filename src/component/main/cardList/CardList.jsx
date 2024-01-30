import React from "react";
import dataBase from "../../../fakeData.json";
const CardList = ({ tabName }) => {
  const { tabNum, writedTo } = tabName;
  const dummyData = dataBase;
  console.log(dummyData[0].writedTo);
  console.log(tabName);
  const filterWriteTo = dummyData.filter(
    (receiver) => receiver.writedTo === writedTo
  );
  return (
    <section>
      <div>{writedTo}의 CardList</div>
      {filterWriteTo.map((data) => {
        const { id, avatar, content, nickname, writedTo, createdAt } = data;

        return (
          <div key={id}>
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
        );
      })}
    </section>
  );
};

export default CardList;
