import styled from "styled-components";
import background from "../../../assets/intro-background.png";
import { rgba } from "polished";

interface IconsContainerProps {
  iconBg: string;
}

export const IntroContainer = styled.section`
  width: 200%;
  height: 34rem;
  background: ${({ theme }) => `url(${background}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    width: 36.75rem;
    margin-bottom: 2rem;
  }

  .homeSpan {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    width: 37rem;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  div {
    display: flex;
  }
`;

export const HomeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 2.25rem;
  margin-top: 4.125rem;
  width: max-content;
`;

export const IconList = styled.span<IconsContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    background: ${({ iconBg }) => iconBg};
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors["white"]};
    border-radius: 50%;
    border: none;

    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  p {
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;
