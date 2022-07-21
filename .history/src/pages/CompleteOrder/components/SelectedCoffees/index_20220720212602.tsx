import { TitleText } from "../../../../components/Texts";
import { CoffeCardCart } from "../CoffeCardCart";
import {
  DetailsContainer,
  SelectedCoffeesContainer
} from "../SelectedCoffees/styles";
import { ConfirmationSection } from "./ConfirmationSection";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        {" "}Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        <CoffeCardCart />
        <CoffeCardCart />
        <CoffeCardCart />
        <ConfirmationSection/>

      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
