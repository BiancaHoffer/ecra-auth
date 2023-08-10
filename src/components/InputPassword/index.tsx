import { useState } from "react";
import { InputHTMLAttributes } from "react";
import { InputContainer, ButtonShowPassword, Input, ErrorMessage } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: any;
  register: any;
  name: string;
  placeholder?: string;
}

export function InputPassword({ register, placeholder, name, errors }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <InputContainer>
        <Input
          type={showPassword === true ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
        />

        <ButtonShowPassword
          onClick={() => setShowPassword(!showPassword)}
          type="button"
        >
          {showPassword === true ?
            <AiOutlineEyeInvisible
              size={20}
              color="#3BA2FE" />
            :
            <AiOutlineEye
              size={20}
              color="#3BA2FE"
            />
          }
        </ButtonShowPassword>
      </InputContainer>

      {errors[name]?.message && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
    </>
  )
}