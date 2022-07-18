import { Minus, Plus } from "phosphor-react";
import { Icon, QuantityInputContainer } from "./styles";

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <Icon>
        <Minus size={14} weight='fill'/>
      </Icon>
      <input type="number" readOnly value={1} />
      <Icon>
        <Plus size={14} weight='fill'/>
      </Icon>
    </QuantityInputContainer>
  );
}
