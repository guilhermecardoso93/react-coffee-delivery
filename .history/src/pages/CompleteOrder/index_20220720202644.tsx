import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffeesContainer } from "./components/SelectedCoffees/styles";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffeesContainer />
    </CompleteOrderContainer>
  );
}
