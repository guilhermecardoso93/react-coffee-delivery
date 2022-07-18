import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import { RegularText } from "../../../components/Texts";
import { useTheme } from "styled-components";
import CoffeHome from "../../../assets/intro-img.png";
import {
  BenefitsContainer,
  IconList,
  IntroContainer,
  IntroContent,
  IntroTitle
} from "./styles";

/*interface BenefitItemProps {
  iconBg?: string;
}*/

export function Intro(/*{ iconBg }: BenefitItemProps*/) {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <IconList iconBg={colors["brand-yellow-dark"]} className="area01">
              <div>
                <ShoppingCart size={14} />
              </div>
              <p>Compra simples e segura</p>
            </IconList>
            <IconList iconBg={colors["base-subtitle"]} className="area02">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </IconList>
            <IconList iconBg={colors["brand-yellow"]} className="area03">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </IconList>
            <IconList iconBg={colors["brand-purple"]} className="area04">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </IconList>
          </BenefitsContainer>
        </div>
      </IntroContent>
      <img src={CoffeHome} />
    </IntroContainer>
  );
}
