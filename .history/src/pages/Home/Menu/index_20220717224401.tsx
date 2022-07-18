import { useTheme } from "styled-components";
import { Intro } from "./Intro";
import { HomeContainer } from "./styles";

interface BenefitItemProps {
  iconBg?: string;
}

export function Home({ iconBg }: BenefitItemProps) {

  return (
    <HomeContainer>
      <Intro />
    </HomeContainer>
  );
}
