import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  const { register } = useFormContext()
  
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" type="text" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" type="text" className="complement" />
      <Input placeholder="Bairro" type="text" />
      <Input placeholder="Cidade" type="text" />
      <Input placeholder="UF" type='text'/>
    </AddressFormContainer>
  );
}
