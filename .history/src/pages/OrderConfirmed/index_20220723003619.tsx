import { RegularText, TitleText } from "../../components/Texts";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import OrderConfirmedImg from "../../assets/Illustration.svg";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import { useTheme } from "styled-components";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentOptionsForm";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmed() {
  const { colors } = useTheme();
  const { state } = (useLocation() as unknown) as LocationType;
  const navigate = useNavigate();


  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

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
            iconBg={colors["brand-purple-dark"]}
            text={
              <RegularText>
                Entrega em{" "}
                <strong>
                  {state.street}, n°{state.number}{" "}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Previsão de Entrega<br />
                <strong>20 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Pagamento na entrega <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={OrderConfirmedImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
