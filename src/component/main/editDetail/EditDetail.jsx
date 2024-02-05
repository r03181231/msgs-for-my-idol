import React from "react";
import Button from "component/common/button/Button";
import useInputs from "component/common/useInput/useInputs";

const EditDetail = ({ setIsEdit, filterData, letterValue, setLetterValue }) => {
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

    const editData = letterValue.map((letter) => {
      if (letter.id === id) {
        return {
          ...letter,
          content: editValueContent,
        };
      }
      return letter;
    });

    setLetterValue(editData);
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
      <textarea
        name="content"
        rows={1}
        value={editValueContent}
        onChange={onChange}
      ></textarea>
      <div>
        <Button name={"취소"} onClick={onEditCancel} />
        <Button name={"수정완료"} onClick={onEditSave} />
      </div>
    </div>
  );
};

export default EditDetail;