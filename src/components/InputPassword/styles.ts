import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1.6px solid #f2f2f2;
  color: #A3A8AB;
  background-color: transparent;
  box-shadow: 1px 3px 20px -19px rgba(0,0,0,0.66);

  transition: 0.4s;

  &:hover {
    border: 1.6px solid #A1C9FF;
  }

  &:focus-within {
    border: 1.6px solid #3BA2FE;
  }
`

export const Input = styled.input`
 padding: 12px;
  color: #A3A8AB;
  height: 100%;
  width: 100%;
  border: none;

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

export const ButtonShowPassword = styled.button`
  background: transparent;
  border: none;
  padding: 6px 12px;
`;