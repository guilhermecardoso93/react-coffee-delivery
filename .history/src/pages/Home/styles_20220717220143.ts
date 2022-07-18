import styled from "styled-components";
import background from "../../assets/intro-background.png";
import { rgba } from "polished";

export const HomeContainer = styled.main`
  margin-bottom: 9.8rem;

  background: ${({ theme }) => `url(${background}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;
`;
