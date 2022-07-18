import { TitleText } from "../../../components/Texts";
import { ShoppingCart } from "phosphor-react";
import { MenuCardContainer, Tags } from "./styles";
import CoffeImg1 from '../../../assets/coffee.png'

export function MenuCard() {
  return (
    <MenuCardContainer>
      <img src={CoffeImg1}/>
      <Tags>
        <span>Tradicional</span>
        <span>Com Leite</span>
      </Tags>
    </MenuCardContainer>
  );
}
