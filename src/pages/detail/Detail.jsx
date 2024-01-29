import React from "react";

const Detail = () => {
  return (
    <div>
      <img src="" alt="" />
      <ul>
        <li>이름 : Dr. Clint Christiansen</li>
        <div>
          To : <span>권진아</span>
        </div>
        <p>23. 11. 03. 오전 11:07:09</p>
      </ul>
      <form action="">
        <label htmlFor="">display : none</label>
        <textarea
          name="comment"
          id="detail-comment"
          cols="30"
          rows="10"
        ></textarea>
      </form>
    </div>
  );
};

export default Detail;
