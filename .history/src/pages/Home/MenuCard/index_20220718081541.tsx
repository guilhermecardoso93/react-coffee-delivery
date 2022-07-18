import { TitleText } from "../../../components/Texts";
import { ShoppingCart } from "phosphor-react";
import { MenuCardContainer } from "./styles";
import CoffeImg1 from '../../../assets/coffee.png'

export function MenuCard() {
  return (
    <MenuCardContainer>
      <img src={CoffeImg1}/>
    </MenuCardContainer>
  );
}
