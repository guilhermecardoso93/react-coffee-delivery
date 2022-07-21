import { ReactNode } from "react";
import { RegularText, TitleText } from "../../../../components/Texts";
import { AddressForm } from "../CompleteOrderForm/AdressForm";
import { SectionTitleFormContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitleForm({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleFormContainer>
      {icon}
      <div>
        <RegularText color="subtitle">
          {title}
        </RegularText>
        <RegularText size="s" color="subtitle">
          {subtitle}
        </RegularText>
      </div>
      <AddressForm/>
    </SectionTitleFormContainer>
  );
}
