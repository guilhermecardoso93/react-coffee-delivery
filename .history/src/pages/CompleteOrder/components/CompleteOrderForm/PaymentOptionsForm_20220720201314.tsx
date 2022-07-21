import { PaymentOptionInput } from "../PaymentOptionInput";
import { PaymentOptionsFormContainer } from "./styles";

export function PaymentOptionsForm() {
  return (
    <PaymentOptionsFormContainer>
      <PaymentOptionInput />
      <PaymentOptionInput />
      <PaymentOptionInput />
    </PaymentOptionsFormContainer>
  );
}
