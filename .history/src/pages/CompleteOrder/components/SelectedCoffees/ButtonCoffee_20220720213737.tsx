import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function ButtonCoffee({ text, ...props }: ButtonProps) {
  <ButtonContainer {...props}>
    {text}
  </ButtonContainer>;
}
