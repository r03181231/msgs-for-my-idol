import UseInputs from "component/common/UseInputs";
import React from "react";
import { v4 as randomId } from "uuid";

const FormAdd = () => {
  const [{ userId, userName, userComment }, setAddValue, onChange, reset] =
    UseInputs({
      userId: randomId(),
      userName: "",
      userComment: "",
    });
  const onAddSubmit = (e) => {
    e.preventDefault();
    reset();
  };

  return (
    <form onSubmit={onAddSubmit}>
      <div>
        <label htmlFor="user-name"></label>
        <input
          id="user-name"
          type="text"
          name="userName"
          value={userName}
          maxLength={20}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="comment"></label>
        <input
          id="comment"
          type="text"
          name="userComment"
          value={userComment}
          maxLength={100}
          onChange={onChange}
        />
      </div>
      <div>
        <button>등록</button>
      </div>
    </form>
  );
};

export default FormAdd;
