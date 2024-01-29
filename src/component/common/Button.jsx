import React from "react";
import styled from "styled-components";

const Button = ({ bgc, onClick }) => {
  return (
    <NormalButton onClick={onClick} bgc={bgc} color={color}>
      button
    </NormalButton>
  );
};

export default Button;

const NormalButton = styled.button`
  background-color: ${(props) => props.bgc || "black"};
  color: ${(props) => props.color || "gray"};
`;
