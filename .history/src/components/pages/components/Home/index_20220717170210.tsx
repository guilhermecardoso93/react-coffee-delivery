import { Coffee, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import CoffeHome from "../../../../assets/intro-img.png";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p className='homeSpan'>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <li>
          <ul>
            <MapPin size={16} />
            <p>Compra simples e segura</p>
          </ul>
          <ul>
            <Package size={16} weight="fill" />
            <p>Embalagem mantém o café intacto</p>
          </ul>
          <ul>
            <Timer size={16} weight="fill" />
            <p>Entrega rápida e rastreada</p>
          </ul>
          <ul>
            <Coffee size={16} weight="fill" />
            <p>O café chega fresquinho até você</p>
          </ul>
        </li>
      </div>
      <div>
        <img src={CoffeHome} alt="" />
      </div>
    </HomeContainer>
  );
}
