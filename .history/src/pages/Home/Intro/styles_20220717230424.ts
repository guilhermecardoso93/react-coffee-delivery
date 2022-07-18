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
  display: flex;
  display:1;
  
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  flex-direction: column;
  

  div {
    display: flex;
    max-width: 60rem;
  }
`;
export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
   display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "area01 area2"
    "area3 area4"; 

.area01 { grid-area: area01; }
.area2 { grid-area: area2; }
.area3 { grid-area: area3; }
.area4 { grid-area: area4; }
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`

export const IconList = styled.span<IconsContainerProps>`
  display: flex;
  align-items: center;
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