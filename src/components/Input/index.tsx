import { InputHTMLAttributes } from "react";
import { ErrorMessage, InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: any;
  register: any;
  name: string;
}

export function Input({ register, name, errors }: InputProps) {
  //console.log(errors[name].message)

  return (
    <>
      <InputContainer
        placeholder="E-mail"
        {...register(name)}
      />

      {errors[name]?.message && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
    </>
  )
}