import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeHome from "../../../../assets/intro-img.png";
import { HomeContainer, HomeList } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p className="homeSpan">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <HomeList>
          <span>
            <div>
              <ShoppingCart size={8} />
            </div>
            <p>Compra simples e segura</p>
          </span>
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
