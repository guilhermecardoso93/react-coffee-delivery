import { TitleText } from "../../components/Texts";
import { OrderConfirmedContainer } from "./styles";


export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size='l'>Uhu! Pedido Confirmado!</TitleText>
      </div>
    </OrderConfirmedContainer>
  );
}
