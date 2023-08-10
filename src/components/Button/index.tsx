import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <ButtonContainer>
      {title}
    </ButtonContainer>
  )
}