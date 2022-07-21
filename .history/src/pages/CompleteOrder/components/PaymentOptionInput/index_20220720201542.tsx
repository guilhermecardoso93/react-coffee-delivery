import { CreditCard } from "phosphor-react";
import { PaymentOptionInputContainer } from "./styles";

export function PaymentOptionInput() {
  return (
    <PaymentOptionInputContainer>
      <CreditCard size={16}/>
      Cartão de Credito
    </PaymentOptionInputContainer>
  );
}
