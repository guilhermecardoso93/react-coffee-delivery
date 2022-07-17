import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import CoffeHome from "../../../../assets/intro-img.png";
import { HomeContainer, HomeList, IconList } from "./styles";

interface BenefitItemProps {
  iconBg: string;
}

export function Home({ iconBg }: BenefitItemProps) {
  const { colors } = useTheme();

  return (
    <HomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p className="homeSpan">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <HomeList>
          <IconList iconBg={colors["brand-purple"]}>
            <div >
              <ShoppingCart size={14} />
            </div>
            <p>Compra simples e segura</p>
          </IconList>
          <span>
            <Package size={16} weight="fill" />
            <p>Embalagem mantém o café intacto</p>
          </span>
          <span>
            <Timer size={16} weight="fill" />
            <p>Entrega rápida e rastreada</p>
          </span>
          <span>
            <Coffee size={16} weight="fill" />
            <p>O café chega fresquinho até você</p>
          </span>
        </HomeList>
      </div>
      <div>
        <img src={CoffeHome} alt="" />
      </div>
    </HomeContainer>
  );
}
