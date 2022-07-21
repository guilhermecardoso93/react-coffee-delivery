import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.div`
  padding: 0.75rem 2.8rem;
  margin-top: 0.7rem;
  color: ${({ theme }) => theme.colors["white"]};
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.3rem;

  background: ${({ theme }) => theme.colors["brand-yellow"]};
  border-radius: 6px;

  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
