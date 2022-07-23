import { ButtonHTMLAttributes } from "react";
import { RegularText } from "../../../../components/Texts";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { Button } from "./ButtonCoffee";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDelivery = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de Itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDelivery}</RegularText>
      </div>
      <div>
        <RegularText size="l" weight="700">
          Total
        </RegularText>
        <RegularText size="l" weight="700">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  );
}
