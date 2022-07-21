import { RegularText, TitleText } from "../../components/Texts";
import { OrderConfirmedContainer } from "./styles";


export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size='l'>Uhu! Pedido Confirmado!</TitleText>
        <RegularText> Agora é só aguardar que logo o café chegará até você.</RegularText>
      </div>
    </OrderConfirmedContainer>
  );
}
