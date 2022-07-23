import { TitleText } from "../../../../components/Texts";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import {
  DetailsContainer,
  SelectedCoffeesContainer
} from "../SelectedCoffees/styles";
import { ConfirmationSection } from "./ConfirmationSection";

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        {" "}Cafés Selecionados
      </TitleText>
      <DetailsContainer>
      {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
