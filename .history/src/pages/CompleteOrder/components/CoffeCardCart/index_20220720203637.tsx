import { CoffeeCardCartContainer } from "./styles";
import CoffeeImg from "../../../../assets/coffee.png";
export function CoffeCardCart() {
  return (
    <CoffeeCardCartContainer>
      <div>
        <img src={CoffeeImg} />
      </div>
      <p />
    </CoffeeCardCartContainer>
  );
}
