import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    width: 36.75rem;
    margin-bottom: 2rem;
  }

  .homeSpan {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    width: 37rem;
  }
`;

export const HomeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  span {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 8px;
      background-color: ${(props) => props.theme["brand-yellow-dark"]};

      width: 32px;
      height: 32px;
      color: ${(props) => props.theme["white"]};
      border-radius: 50%;
      border: none;
    }
  }
`;
