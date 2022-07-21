import { RegularText } from "../../../../components/Texts";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de Itens</RegularText>
        <RegularText>R 9,90</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R 9,90</RegularText>
      </div>
    </ConfirmationSectionContainer>
  );
}
