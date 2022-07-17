import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <li>
          <ul>
            <MapPin />
            <p>Compra simples e segura</p>
          </ul>
          <ul>
            <Package size={32} weight="fill" />
            <p>Embalagem mantém o café intacto</p>
          </ul>
          <ul>
            <Timer size={32} weight="fill" />
            <p>Compra simples e segura</p>
          </ul>
          <ul>
            <Coffee size={32} weight="fill" />
            <p>Compra simples e segura</p>
          </ul>
        </li>
      </div>
      <div />
    </HomeContainer>
  );
}
