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
  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 900px;
  }
`;
