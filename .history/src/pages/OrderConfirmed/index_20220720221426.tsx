import { RegularText, TitleText } from "../../components/Texts";
import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import OrderConfirmedImg from "../../assets/Illustration.svg";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import { Icon } from "../../components/QuantityInput/styles";

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido Confirmado!</TitleText>
        <RegularText size="l" color="subtitle">
          {" "}Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>s
         <Icon/>
        </OrderDetailsContainer>
        <img src={OrderConfirmedImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
