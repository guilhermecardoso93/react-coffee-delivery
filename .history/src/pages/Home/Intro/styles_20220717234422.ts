import styled from "styled-components";
import background from "../../../assets/intro-background.png";
import { rgba } from "polished";
import { TitleText } from "../../../components/Texts";

interface IconsContainerProps {
  iconBg: string;
}

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  padding: 0.5rem;
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
`;

export const IntroContent = styled.div`
  width: 40%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  .regularText {
    width: 60%;
  }
`;
export const IntroTitle = styled(TitleText)`
  width: 60%;
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 63%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;

export const IconList = styled.span<IconsContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

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
  }
  p {
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const CoffeImgHome = styled.div`
display: flex;
align-items: center;
justify-content: center;
`