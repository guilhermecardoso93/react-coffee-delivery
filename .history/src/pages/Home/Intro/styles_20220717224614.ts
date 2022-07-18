import styled from "styled-components";
import background from "../../../assets/intro-background.png";
import { rgba } from "polished";
import { TitleText } from "../../../components/Texts";

interface IconsContainerProps {
  iconBg: string;
}

export const IntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${background}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
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
export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;
