import { TitleText } from "../../../../components/Texts";
import { DetailsContainer, SelectedCoffeesContainer } from "../SelectedCoffees/styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        {" "}Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        <p>trad</p>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
