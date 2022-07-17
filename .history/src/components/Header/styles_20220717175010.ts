import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  .headerInfos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .local {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    border-radius: 6px;

    background-color: ${(props) => props.theme.colors["brand-purple-light"]};
    color: ${(props) => props.theme.colors["brand-purple-dark"]};
  }

  .headerCar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    border-radius: 6px;

    background-color: ${(props) => props.theme.colors["brand-yellow-light"]};
    color: ${(props) => props.theme.colors["brand-yellow-dark"]};
  }
`;
