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

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function MenuCard({ coffee }: CoffeeProps) {
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
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CardOrderQuantity>
      </CardFooter>
    </MenuCardContainer>
  );
}
