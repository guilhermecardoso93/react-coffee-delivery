import { Minus, Plus } from "phosphor-react";
import { Icon, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity?: 1;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium"
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <Icon>
        <Minus size={14} weight="fill" />
      </Icon>
      <input type="number" readOnly value={quantity} />
      <Icon>
        <Plus size={14} weight="fill" />
      </Icon>
    </QuantityInputContainer>
  );
}
