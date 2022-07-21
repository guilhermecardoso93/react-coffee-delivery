import {
  ActionsContainer,
  CoffeeCardCartContainer,
  RemoveButton
} from "./styles";
import CoffeeImg from "../../../../assets/coffee.png";
import { RegularText } from "../../../../components/Texts";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";

export function CoffeCardCart() {
  return (
    <CoffeeCardCartContainer>
      <div>
        <img src={CoffeeImg} />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
        </div>
        <ActionsContainer>
          <QuantityInput size={'small'}/>
          <RemoveButton>
            <Trash size={16} /> Remover
          </RemoveButton>
        </ActionsContainer>
      </div>
      <p>R$ 9,90</p>
      <p />
    </CoffeeCardCartContainer>
  );
}
