import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors["brand-purple-light"]};
      border-color: ${theme.colors["brand-purple"]};
      &:hover {
        background: ${theme.colors["brand-purple-light"]};
      }
    `}
  }
`;
