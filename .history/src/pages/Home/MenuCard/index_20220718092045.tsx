import { RegularText, TitleText } from "../../../components/Texts";
import { ShoppingCart } from "phosphor-react";
import {
  MenuCardContainer,
  Name,
  Tags,
  Description,
  CardFooter,
  CardOrderQuantity
} from "./styles";
import CoffeImg1 from "../../../assets/coffee.png";
import { QuantityInput } from "../../../components/QuantityInput";

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
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
        <CardOrderQuantity>
          <QuantityInput />
          <button>
            <ShoppingCart/>
          </button>
        </CardOrderQuantity>
      </CardFooter>
    </MenuCardContainer>
  );
}
