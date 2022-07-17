import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import { ReactNode } from "react";
import { useTheme } from "styled-components";
import CoffeHome from "../../../../assets/intro-img.png";
import { HomeCoffeImg, HomeContainer, HomeList, IconList } from "./styles";

interface BenefitItemProps {
  iconBg?: string;
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
          <IconList iconBg={colors["brand-yellow-dark"]}>
            <div>
              <ShoppingCart size={14} />
            </div>
            <p>Compra simples e segura</p>
          </IconList>
          <IconList iconBg={colors["base-subtitle"]}>
            <div>
              <Package size={16} weight="fill" />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </IconList>
          <IconList iconBg={colors["brand-yellow"]}>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <p>Entrega rápida e rastreada</p>
          </IconList>
          <IconList iconBg={colors["brand-purple"]}>
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <p>O café chega fresquinho até você</p>
          </IconList>
        </HomeList>
      </div>
      <HomeCoffeImg>
        <img src={CoffeHome} alt="" />
      </HomeCoffeImg>
    </HomeContainer>
  );
}
