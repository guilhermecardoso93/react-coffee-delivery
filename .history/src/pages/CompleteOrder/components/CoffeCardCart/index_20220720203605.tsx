import { CoffeCardCartContainer } from "./styles";
import { CoffeeImg } from '../../../../assets/coffee.png'
export function CoffeCardCart() {
  return (
    <CoffeCardCartContainer>
      <div>
        <img src={CoffeeImg}/>
      </div>
      <p></p>
    </CoffeCardCartContainer>
  );
}
