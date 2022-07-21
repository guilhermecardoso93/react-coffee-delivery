import { TitleText } from "../../../../components/Texts";
import { CoffeCardCart } from "../CoffeCardCart";
import {
  DetailsContainer,
  SelectedCoffeesContainer
} from "../SelectedCoffees/styles";

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
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
