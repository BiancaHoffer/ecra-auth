import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  title: ReactNode;
  disabled: boolean;
  type: "submit" | "button" | "reset";
}

export function Button({ title, disabled, type, ...rest }: ButtonProps) {
  return (
    <ButtonContainer
      disabled={disabled}
      type={type}
      {...rest}
    >
      {title}
    </ButtonContainer>
  )
}