import React from "react";
import dataBase from "fakeData.json";
import { Link } from "react-router-dom";
const CardList = ({ originValue, tabName }) => {
  const { writedTo } = tabName; //state에 따라
  const dummyData = dataBase;
  const filterDummy = dummyData.filter((dummy) => dummy.writedTo === writedTo);
  const filterOrigin = originValue.filter(
    (origin) => origin.writedTo === writedTo
  );
  console.log(filterOrigin);
  const originNdDummy = [...originValue, ...filterDummy];
  console.log(originNdDummy);
  return (
    <section>
      <div>{writedTo}의 CardList</div>
      {originNdDummy.map((data) => {
        const { id, avatar, content, nickname, createdAt } = data;
        return (
          // <Link to="`/datail/:{id}`">
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
          // </Link>
        );
      })}
    </section>
  );
};

export default CardList;
