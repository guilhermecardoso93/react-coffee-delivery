import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .headerInfos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  
`;

export const HeaderButton = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  border: none;

`/*

export const HeaderButtonLocal = HeaderButton.styled `
 background-color: ${(props) => props.theme.colors["brand-purple-light"]};
  color: ${(props) => props.theme.colors["brand-purple-dark"]};
`

.Headerlocal {
 

 
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
}*/