import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentOptionInput } from "../PaymentOptionInput";
import { PaymentOptionsFormContainer } from "./styles";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />
  }
};

export function PaymentOptionsForm() {
  const { register, formState: { errors }, } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;
  return (
    <PaymentOptionsFormContainer>
      <PaymentOptionInput />
      <PaymentOptionInput />
      <PaymentOptionInput />
    </PaymentOptionsFormContainer>
  );
}
