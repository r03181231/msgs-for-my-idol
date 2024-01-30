import React from "react";
import styled from "styled-components";

const Button = ({ onClick, name, ...style }) => {
  return (
    <NormalButton onClick={onClick} {...style}>
      {name}
    </NormalButton>
  );
};

export default Button;

const NormalButton = styled.button`
  background-color: ${(style) => style.bgc || "#333"};
  padding: 0.4rem 1rem;

  border: none;
  border-radius: ${(style) =>
    style.radius && style.radius.includes("rem")
      ? style.radius
      : style.radius
      ? style.radius + "rem"
      : "0.8rem"};

  color: ${(style) => style.color || "white"};

  font-size: 1.2rem;
  cursor: pointer;
`;
