import Button from "component/common/Button";
import UseInputs from "component/common/UseInputs";
import React, { useEffect, useRef, useState } from "react";
import { v4 as randomId } from "uuid";
import FormSelect from "../formSelect/FormSelect";

const FormAdd = ({
  setTabName,
  originValue,
  setOriginValue,
  blankPattern,
  time,
}) => {
  const nicknameRef = useRef(null);
  const contentRef = useRef(null);
  const normalAvataUrl = "../../../../assets/images/anthena-angels.png";
  const [addValue, setAddValue, onChange, reset] = UseInputs({
    id: randomId(),
    nickname: "",
    avatar: normalAvataUrl,
    content: "",
    writedTo: "",
    createdAt: time,
  });

  const { id, nickname, avatar, content, writedTo, createdAt } = addValue;
  useEffect(() => {
    nicknameRef.current.focus();
  }, []);

  const onAddSubmit = (e) => {
    e.preventDefault();
    const nicknameBlank = nickname.replace(blankPattern, "");
    const contentBlank = content.replace(blankPattern, "");

    if (nicknameBlank === "" && contentBlank === "") {
      alert("닉네임과 내용을 전부 채워주세요.");
      nicknameRef.current.focus();
      return;
    }
    // 공백이면 아무 것도 리턴하지 않게 해줘.
    if (nicknameBlank === "") {
      alert("닉네임을 적어주세요.");
      nicknameRef.current.focus();
      return;
    }
    if (contentBlank === "") {
      alert("내용을 적어주세요.");
      contentRef.current.focus();
      return;
    }

    console.log(addValue);

    reset();
  };

  return (
    <section>
      <form onSubmit={onAddSubmit}>
        <div>
          <label htmlFor="user-name">닉네임 :</label>
          <input
            id="user-name"
            type="text"
            name="nickname"
            value={nickname}
            ref={nicknameRef}
            maxLength={20}
            placeholder="최대 20글자까지 작성할 수 있습니다."
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="comment">내용 : </label>
          <input
            id="comment"
            type="text"
            name="content"
            value={content}
            ref={contentRef}
            maxLength={100}
            placeholder="최대 100글자까지만 작성할 수 있습니다."
            onChange={onChange}
          />
        </div>
        <FormSelect
          setAddValue={setAddValue}
          setTabName={setTabName}
          setOriginValue={setOriginValue}
        />
        <div>
          <Button name={"등록"} />
        </div>
      </form>
    </section>
  );
};

export default FormAdd;
