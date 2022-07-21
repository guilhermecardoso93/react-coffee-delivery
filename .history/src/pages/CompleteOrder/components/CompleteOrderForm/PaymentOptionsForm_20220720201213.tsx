import { Input } from "../../../../components/Input";
import { PaymentOptionInput } from "../PaymentOptionInput";
import { AddressFormContainer, PaymentOptionsFormContainer } from "./styles";

export function PaymentOptionsForm() {
  return (
    <PaymentOptionsFormContainer>
      <PaymentOptionInput />
      <PaymentOptionInput />
      <PaymentOptionInput />
    </PaymentOptionsFormContainer>
  );
}
