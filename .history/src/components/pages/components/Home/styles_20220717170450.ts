import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  gap: 1rem;

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

  .homeList {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 567px;
    height: 84px;
    left: calc(50% - 567px / 2 - 276.5px);
    top: calc(50% - 84px / 2 + 122px);
  }
`;
