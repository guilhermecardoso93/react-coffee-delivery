import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/PaymentOptionInput";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  );
}
