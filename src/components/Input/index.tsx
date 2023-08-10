import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: any;
  register: any;
  name: string;
  placeholder?: string;
}

export function Input({ register, placeholder, name }: InputProps) {
  return (
    <>
      <InputContainer
        placeholder={placeholder}
        {...register(name)}
      />
    </>
  )
}