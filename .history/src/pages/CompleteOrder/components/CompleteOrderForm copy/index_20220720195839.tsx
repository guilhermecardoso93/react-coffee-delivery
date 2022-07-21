import { TitleText } from "../../../../components/Texts";
import { AddressForm } from "../CompleteOrderForm/AdressForm";
import { CompleteOrderFormContainer } from "./styles";

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <TitleText size='xl' color='subtitle'> Complete seu pedido</TitleText>
      
      <FormSectionContainer>
        <AddressForm/>
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
