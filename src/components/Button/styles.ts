import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 12px;
  background-color: #3BA2FE;
  color: white;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  width: 100%;
  box-shadow: 1px 3px 20px -19px rgba(0,0,0,0.66);
  margin-top: 16px;

  transition: 0.4s;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    background: #A1C9FF;
  }

  &:disabled {
    cursor: not-allowed;
  }
`