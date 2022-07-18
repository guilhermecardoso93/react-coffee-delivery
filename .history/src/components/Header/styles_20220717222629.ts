import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 6.5rem;
`;

export const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButtonBase = styled.div<HeaderButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  border: none;
  min-width: 2.3rem;
  height: 2.3rem;
  position: relative;
  font-size: 0.875rem;

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      background-color: ${theme.colors[`brand-${variant}-light`]};
      color: ${theme.colors[`brand-${variant}`]};
    `}

  ${({ variant, theme }) =>
    variant === "yellow" &&
    css`
      background-color: ${theme.colors[`brand-${variant}-light`]};
      svg {
        color: ${theme.colors[`brand-${variant}-dark`]};
      }
    `}
`;
