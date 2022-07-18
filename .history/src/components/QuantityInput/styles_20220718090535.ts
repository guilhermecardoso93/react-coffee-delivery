import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  flex:1;
  background: ${({theme}) => theme.colors['base-button']};
`;

export const Icon = styled.button.attrs({
  type: 'button',
})
`