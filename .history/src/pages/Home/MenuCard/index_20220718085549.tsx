import { RegularText, TitleText } from "../../../components/Texts";
import { ShoppingCart } from "phosphor-react";
import {
  MenuCardContainer,
  Name,
  Tags,
  Description,
  CardFooter
} from "./styles";
import CoffeImg1 from "../../../assets/coffee.png";

export function MenuCard() {
  return (
    <MenuCardContainer>
      <img src={CoffeImg1} />
      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>
      <Name>Expresso Tradicional</Name>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <RegularText size="l">R$</RegularText>
        <TitleText size="m" color="text" as="strong">
          9,90
        </TitleText>
      </CardFooter>
    </MenuCardContainer>
  );
}
