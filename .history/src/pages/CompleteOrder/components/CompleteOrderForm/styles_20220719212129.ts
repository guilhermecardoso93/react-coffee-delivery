import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 40rem;
  gap: 0.75rem;
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
`;