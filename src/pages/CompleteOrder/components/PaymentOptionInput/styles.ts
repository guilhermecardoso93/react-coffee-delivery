import styled from "styled-components";

export const PaymentOptionInputContainer = styled.div`
  padding: 0 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  border-radius: 6px;
  
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  
  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};

  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
  user-select: none;
`;
