import { InputHTMLAttributes, ReactNode } from "react";
import { PaymentMethodContainer, ContentContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};



export function PaymentOptionInput({id, icon, label, ...props} :PaymentMethodInputProps ) {
  return (
    <PaymentMethodContainer>
      <input id={id} type='radio' {...props} name='paymentMethod'/>
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  );
}
