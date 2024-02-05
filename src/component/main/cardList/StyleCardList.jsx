import styled from "styled-components";

export const CardSection = styled.section`
  background-color: #333;
  display: flex;
  flex-direction: column;
  width: 40rem;

  padding: 0.8rem;
  border-radius: 0.8rem;

  gap: 20px;
`;

export const LetterWapperDiv = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.8rem;

  border: 1px solid white;
  color: white;

  gap: 0.8rem;
`;

export const UserInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* gap: 2rem; */
`;

export const ImgWapperDiv = styled.div``;

export const AvatarImg = styled.img`
  width: 5rem;
  height: 5rem;

  object-fit: cover;
  border-radius: 50rem;

  overflow: hidden;
`;

export const NicknameNdDateDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ContentP = styled.p`
  background-color: gray;
  width: 440px;

  padding: 0.8rem;

  border-radius: 0.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
