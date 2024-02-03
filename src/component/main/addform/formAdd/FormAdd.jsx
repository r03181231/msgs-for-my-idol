import React, { useContext, useEffect, useRef } from "react";
import { LetterContext } from "context/LetterContext";
import { v4 as randomId } from "uuid";
import useInputs from "component/common/useInput/useInputs";
import Button from "component/common/button/Button";
import FormSelect from "../formSelect/FormSelect";

const FormAdd = ({ tab, tabData }) => {
  const normalAvataUrl =
    "https://lh7-us.googleusercontent.com/MyS-PhOT-AvaQtCYXsr0oQPxakqvdc-s-QFcNZmCwd19fbYditWA_IwxeepE78dANxt04nEws75hrFfmqNuhJLx2EQxy_RSe8x6M7LcHGVjhzEkSpREFDhWljam2mdGNxes5xqoxP1sZpYijy3nTTXU";
  const data = useContext(LetterContext);
  const setLetterValue = data.setLetterValue;
  const blankPattern = data.blankPattern;
  const nicknameRef = useRef(null);
  const contentRef = useRef(null);
  const time = data.time;

  const [addValue, setAddValue, onChange, reset] = useInputs({
    id: randomId(),
    nickname: "",
    avatar: normalAvataUrl,
    content: "",
    writedTo: tab.writedTo,
    createdAt: time,
  });
  const { nickname, content, writedTo } = addValue;
  const nicknameBlank = nickname.replace(blankPattern, "");
  const contentBlank = content.replace(blankPattern, "");
  // input 포커스
  useEffect(() => {
    nicknameRef.current.focus();
  }, []);
  // 추가
  const onAddSubmit = (e) => {
    e.preventDefault();

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

    setLetterValue((prevValue) => [{ ...addValue }, ...prevValue]);
    reset();
    nicknameRef.current.focus();
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
          tabData={tabData}
          onChange={onChange}
          addValue={addValue}
          setAddValue={setAddValue}
        />
        <div>
          <Button name={"등록"} />
        </div>
      </form>
    </section>
  );
};

export default FormAdd;
