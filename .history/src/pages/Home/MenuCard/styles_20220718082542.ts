import styled from "styled-components";

export const MenuCardContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img {
    width: 7.5rem;
    height: 7.5rem;
  }
`;
