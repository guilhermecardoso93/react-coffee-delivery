import { RegularText, TitleText } from "../../components/Texts";
import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import OrderConfirmedImg from "../../assets/Illustration.svg";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import { Icon } from "../../components/QuantityInput/styles";
import { IconList } from "../Home/Intro/styles";
import { useTheme } from "styled-components";
import { InfoWithIconContainer } from "../../components/InfoWithIcon/styles";
import { InfoWithIcon } from "../../components/InfoWithIcon";

export function OrderConfirmed() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido Confirmado!</TitleText>
        <RegularText size="l" color="subtitle">
          {" "}Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>
      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Entrega em <strong>Rua Paulo Tarso ,n°30 </strong><br />
                Áquarios - Cabo Frio - RJ
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={OrderConfirmedImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
