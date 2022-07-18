import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({theme}) => theme.colors['base-button']};

`;

export const Icon = styled.button.attrs({
  type: 'button',
})
``