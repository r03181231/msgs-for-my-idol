import styled from "styled-components";
import bgImage from "../../../assets/images/anthena-angels.png";

export const Header = styled.header`
  width: 100%;
  height: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 30px;

  border: 1px solid gray;

  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  object-fit: cover;

  gap: 20px;

  h1 {
    background-color: rgba(255, 255, 255, 0.4);
    padding: 0.8rem;

    border-radius: 2rem;

    font-size: 2rem;
    font-weight: 900;
    text-align: center;
  }
`;
