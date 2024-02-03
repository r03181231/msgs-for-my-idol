// Detali.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLetterEditDelete } from "../../redux/modules/letter";
import EditDetail from "pages/editDetail/EditDetail";
import Button from "component/common/button/Button";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const letterValue = useSelector((store) => store.letter.letterValue);
  const [isEdit, setIsEdit] = useState(false); // 수정 상태 , 저장
  const thisLetter = letterValue.filter((data) => data.id === id);

  const moveHomeNavigator = () => {
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
    dispatch(setLetterEditDelete(dataArr));
    moveHomeNavigator();
  };

  return (
    <>
      {thisLetter && thisLetter.length > 0 ? (
        thisLetter.map((filterData) => {
          const { id, avatar, nickname, writedTo, content, createdAt } =
            filterData;
          return (
            <div key={id}>
              <Button name={"홈버튼"} onClick={moveHomeNavigator} />
              {!isEdit ? (
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
                  <Button name={"수정"} onClick={onEdit} />
                  <Button name={"삭제"} onClick={() => onDelete(id)} />
                </div>
              ) : (
                <EditDetail
                  setIsEdit={setIsEdit}
                  filterData={filterData}
                  letterValue={letterValue}
                />
              )}
            </div>
          );
        })
      ) : (
        <div>정보를 받아오지 못하고 있습니다. 오류 사항을 문의해주세요</div>
      )}
    </>
  );
};

export default Detail;
