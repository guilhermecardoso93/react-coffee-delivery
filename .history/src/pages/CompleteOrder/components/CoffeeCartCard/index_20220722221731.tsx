import {
  ActionsContainer,
  CoffeeCardCartContainer,
  RemoveButton
} from "./styles";
import CoffeeImg from "../../../../assets/coffee.png";
import { RegularText } from "../../../../components/Texts";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../context/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  const coffeeTotal = coffee.price * coffee.quantity;
  const formatPrice = formatMoney(coffeeTotal);
  return (
    <CoffeeCardCartContainer>
      <div>
        <img src={`/coffee/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">
            {coffee.name}
          </RegularText>
          <ActionsContainer>
            <QuantityInput 
              size="small" 
              quantity={coffee.quantity} 
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton>
              <Trash size={16} /> Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>
        {formatPrice}
      </p>
    </CoffeeCardCartContainer>
  );
}
