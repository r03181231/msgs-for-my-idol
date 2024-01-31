import React, { useState } from "react";

const FormSelect = ({ tabData, addValue, setAddValue }) => {
  // console.log(addValue);

  const { writedTo } = addValue;
  const optionOrder = (e) => {
    setAddValue((prev) => {
      return { ...prev, writedTo: e.target.value };
    });
  };
  return (
    <select
      name="writedTo"
      value={writedTo}
      key={writedTo}
      onChange={optionOrder}
    >
      {tabData.map((optionWriteTo) => {
        const { tabNum, writedTo } = optionWriteTo;
        return (
          <option key={tabNum} value={writedTo}>
            {writedTo}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelect;