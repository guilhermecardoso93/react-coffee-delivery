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
import { formatMoney } from "../../../utils/formatMoney";

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
  const pricePretty = formatMoney(coffee.price)

  return (
    <MenuCardContainer>
      <img src={CoffeImg1} />
      <Tags>
       {coffee.tags.map( (tag) =>(
         <span key={`${coffee.id}${coffee.tags}`}>{tag}</span>
       ))}
      </Tags>
      <Name>{coffee.name}</Name>

      <Description>
        {coffee.description}
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {pricePretty}
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
