import { ButtonHTMLAttributes } from "react";
import { RegularText } from "../../../../components/Texts";
import { Button } from "./ButtonCoffee";
import { ConfirmationSectionContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function ConfirmationSection({ text, ...props }: ButtonProps) {
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
      <div>
        <RegularText size="l" weight='700'>Total</RegularText>
        <RegularText size="l" weight='700'>R$ 18,80</RegularText>
      </div>

      <Button text='Confirmar Pedido'/>
    </ConfirmationSectionContainer>
  );
}
