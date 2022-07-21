import { CreditCard } from "phosphor-react";
import { PaymentOptionInputContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <PaymentOptionInputContainer>
      <CreditCard size={16} />
      Cartão de Credito
    </PaymentOptionInputContainer>
  );
}
