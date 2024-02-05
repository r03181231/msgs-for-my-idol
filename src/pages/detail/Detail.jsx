// Detali.js
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LetterContext } from "context/LetterContext.js";
import EditDetail from "pages/editDetail/EditDetail";
import Button from "component/common/button/Button";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { letterValue, setLetterValue, tab } = useContext(LetterContext);
  const tabName = tab.writedTo;
  const [isEdit, setIsEdit] = useState(false); // 수정 상태 , 저장
  const filterThisCard = letterValue.filter(
    (data) => data.id === id && data.writedTo === tabName
  );

  const moveNavigator = () => {
    navigate("/", { replace: true });
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  const onDelete = (clickId) => {
    // 삭제 유효성
    if (window.confirm("삭제하시겠습니까?") === true) {
      alert("삭제되었습니다.");
    } else {
      alert("삭제를 취소하셨습니다.");
      return;
    }

    const dataArr = letterValue.filter((stayTodo) => stayTodo.id !== clickId);
    setLetterValue(dataArr);
    moveNavigator();
  };

  return (
    <>
      {filterThisCard && filterThisCard.length > 0 ? (
        filterThisCard.map((filterData) => {
          const { id, avatar, nickname, writedTo, content, createdAt } =
            filterData;
          return (
            <div key={id}>
              <Button name={"홈버튼"} onClick={moveNavigator} />

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
                {!isEdit ? (
                  <div>
                    <p>{content}</p>
                    <Button name={"수정"} onClick={onEdit} />
                    <Button name={"삭제"} onClick={() => onDelete(id)} />
                  </div>
                ) : (
                  <EditDetail setIsEdit={setIsEdit} filterData={filterData} />
                )}
              </div>
            </div>
          );
        })
      ) : (
        <>그래도 이게 뜨면 안 되지..</>
      )}
    </>
  );
};

export default Detail;
