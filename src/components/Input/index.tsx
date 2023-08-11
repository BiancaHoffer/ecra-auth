import { ReactNode, useState } from "react";
import { InputHTMLAttributes } from "react";
import { InputContainer, ButtonShowPassword, InputForm, ErrorMessage } from "./styles";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { DeepMap, FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  errors: DeepMap<FieldValues, FieldErrors>;
  placeholder?: string;
  inputPassword?: boolean;
  iconInput?: ReactNode;
}

export function Input({
  register,
  placeholder,
  name,
  inputPassword = false,
  errors,
  iconInput,
  ...rest }: InputProps) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>

      <InputContainer>
        {iconInput}

        <InputForm
          type={showPassword === true ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />


        {inputPassword &&
          <ButtonShowPassword
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword === true ?
              <AiOutlineEyeInvisible
                size={20}
                color="#3BA2FE"
              />
              :
              <AiOutlineEye
                size={20}
                color="#3BA2FE"
              />
            }
          </ButtonShowPassword>
        }
      </InputContainer>

      {errors[name]?.message && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
    </>
  )
}