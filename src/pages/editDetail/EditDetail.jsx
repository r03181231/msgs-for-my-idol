import Button from "component/common/button/Button";
import useInputs from "component/common/useInput/useInputs";

import React from "react";

const EditDetail = ({ setIsEdit, filterData }) => {
  const { id, avatar, nickname, writedTo, content, createdAt } = filterData;
  const [editValue, setEditValue, onChange, reset] = useInputs({
    id,
    nickname,
    avatar,
    content,
    writedTo,
    createdAt,
  });

  // // 수정 값 할당 변수
  const editValueContent = editValue.content;

  // //수정 저장
  const onEditSave = () => {
    //유효성
    const editSaveCheck = window.confirm("수정내용을 저장하시겠습니까?");
    if (editSaveCheck === true && editValueContent === content) {
      alert("아무런 수정사항이 없습니다.");
      return;
    }
    if (editSaveCheck === false) {
      alert("수정을 취소하셨습니다.");
      setIsEdit(false);
      return;
    }

    const currentTabData = JSON.parse(localStorage.getItem(writedTo));

    const editData = currentTabData.map((prevData) => {
      console.log(prevData.id === id);
      if (prevData.id === id) {
        return {
          ...prevData,
          content: editValueContent,
        };
      }
      return prevData;
    });

    localStorage.setItem(writedTo, JSON.stringify(editData));
    alert("내용을 수정하셨습니다.");
    setIsEdit(false);
  };
  // // 수정 취소
  const onEditCancel = () => {
    alert("수정을 취소하셨습니다.");
    setIsEdit(false);
  };

  return (
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
      <textarea
        name="content"
        rows={1}
        value={editValueContent}
        onChange={onChange}
      ></textarea>
      <Button name={"취소"} onClick={onEditCancel} />
      <Button name={"수정완료"} onClick={onEditSave} />
    </div>
  );
};

export default EditDetail;
