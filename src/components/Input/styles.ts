import styled from "styled-components";

export const InputContainer = styled.input`
  padding: 12px;
  color: #A3A8AB;
  border-radius: 4px;
  border: 1.6px solid #f2f2f2;
  width: 100%;
  box-shadow: 1px 3px 20px -19px rgba(0,0,0,0.66);
  margin-bottom: 16px;

  transition: 0.4s;

  &:hover {
    border: 1.6px solid #A1C9FF;
  }

  &:focus {
    border: 1.6px solid #3BA2FE;
  }

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #A3A8AB;
}

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #A3A8AB;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: #A3A8AB;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  margin-top: -8px;
  align-self: start;
`

