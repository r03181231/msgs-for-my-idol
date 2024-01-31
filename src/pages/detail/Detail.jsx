import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import dataBase from "../../shared/fakeData.json";
import Button from "component/common/Button";
import useInputs from "component/common/useInputs";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const locationData = useLocation();
  console.log(locationData);
  const originData = locationData.state.originValue;
  console.log(originData);
  const dummyData = dataBase;
  const filterDummy = dummyData.filter((data) => data.id === id);
  const [originValue, setOriginValue, onChange, reset] = useInputs([]);

  const onDelete = (clickId) => {
    console.log(clickId);
    // 삭제 유효성
    if (window.confirm("삭제하시겠습니까?") === true) {
      alert("삭제되었습니다.");
    } else {
      alert("삭제를 취소하셨습니다.");
      return;
    }
    //  setTodoInputs((prevTodoInputs) =>
    //    prevTodoInputs.filter((stayTodo) => stayTodo.id !== clickId)
    //  );
  };
  const trigger = () => {
    navigate(
      "/",
      { replace: true },
      {
        state: { onDelete },
      }
    );
  };

  return (
    <>
      {filterDummy.map((filterData) => {
        const { id, avatar, nickname, writedTo, content, createdAt } =
          filterData;
        return (
          <div key={id}>
            <button onClick={() => trigger()}>홈버튼</button>
            <div>
              <img src={avatar} alt="dummyimage" />
              <ul>
                <li>{nickname}</li>
                <div>
                  To : <span>{writedTo}</span>
                </div>
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
              </ul>

              <p>{content}</p>
              <Button name={"수정"} />
              <Button name={"삭제"} onClick={() => onDelete(id)} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Detail;
