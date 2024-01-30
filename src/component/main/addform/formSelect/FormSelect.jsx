import React, { useState } from "react";

const FormSelect = (setAddValue) => {
  const [optionValue, setOptionValue] = useState("정승환");
  const optionOrder = (e) => {
    setOptionValue(e.target.value);
    // setAddValue((prev) => [{ ...prev, writedTo: optionValue }]);
  };
  return (
    <select
      name="optionName"
      key={optionValue}
      value={optionValue}
      onChange={optionOrder}
    >
      {
        <>
          <option value="정승환">정승환</option>
          <option value="권진아">권진아</option>
          <option value="샘킴">샘킴</option>
          <option value="이진아">이진아</option>
        </>
      }
    </select>
  );
};

export default FormSelect;
