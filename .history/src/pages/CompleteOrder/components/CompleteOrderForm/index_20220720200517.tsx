import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Texts";
import { SectionTitleForm } from "../SectiontitleForm";
import { AddressForm } from "./AdressForm";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <CompleteOrderFormContainer>
      <TitleText size="xl" color="subtitle">
        {" "}Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitleForm
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow"]} />}
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitleForm
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
