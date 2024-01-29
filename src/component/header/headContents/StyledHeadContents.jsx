import styled from "styled-components";

export const Header = styled.header`
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 30px;

  border: 1px solid gray;

  background-image: url("../../../assets/images/anthena-angels.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  gap: 20px;

  h1 {
    text-align: center;
  }
`;
