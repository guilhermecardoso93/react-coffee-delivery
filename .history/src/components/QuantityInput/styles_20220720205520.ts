import styled from "styled-components";

interface QuantityInput {
  size?: "medium" | "small";
}

export const QuantityInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 0.5rem;

  background: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }
`;

export const Icon = styled.button.attrs({
  type: "button"
})`
  width: 0.875rem;
  height: 0.875rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
