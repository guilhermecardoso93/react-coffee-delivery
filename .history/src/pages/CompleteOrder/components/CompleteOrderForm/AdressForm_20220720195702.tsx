import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type='number' className="cep" />
      <Input placeholder="Rua" type='text' className="street" />
      <Input placeholder="Número" type='number'/>
    </AddressFormContainer>
  );
}
