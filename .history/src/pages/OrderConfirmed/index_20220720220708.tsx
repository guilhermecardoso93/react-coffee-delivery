import { RegularText, TitleText } from "../../components/Texts";
import OrderConfirmedImg from '../../assets/Illustration.svg'
import { OrderConfirmedContainer } from "./styles";

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido Confirmado!</TitleText>
        <RegularText size='l' color="subtitle">
          {" "}Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>
      <section>
        <img src={OrderConfirmedImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
