import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type='number' classNAme="cep" />
    </AddressFormContainer>
  );
}
