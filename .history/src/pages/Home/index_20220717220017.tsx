import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import CoffeHome from "../../../../../assets/intro-img.png";
import { Intro } from "./Intro";
import {  HomeContainer} from "./styles";

interface BenefitItemProps {
  iconBg?: string;
}

export function Home({ iconBg }: BenefitItemProps) {
  const { colors } = useTheme();

  return (
    <HomeContainer className="container">
      <Intro />
    </HomeContainer>
  );
}
