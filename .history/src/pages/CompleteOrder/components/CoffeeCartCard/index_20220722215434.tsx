import {
  ActionsContainer,
  CoffeeCardCartContainer,
  RemoveButton
} from "./styles";
import CoffeeImg from "../../../../assets/coffee.png";
import { RegularText } from "../../../../components/Texts";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  return (
    <CoffeeCardCartContainer>
      <div>
        <img src={CoffeeImg} />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size={"small"} />
            <RemoveButton>
              <Trash size={16} /> Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCardCartContainer>
  );
}
