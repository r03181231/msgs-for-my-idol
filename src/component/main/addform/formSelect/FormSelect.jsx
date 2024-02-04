import { useContext } from "react";
import { LetterContext } from "context/LetterContext";

// FormSelect.jsx
const FormSelect = ({ addValue, setAddValue }) => {
  const { tabData } = useContext(LetterContext);
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
