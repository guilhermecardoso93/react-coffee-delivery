import { ActionsContainer, CoffeeCardCartContainer } from "./styles";
import CoffeeImg from "../../../../assets/coffee.png";
import { RegularText } from "../../../../components/Texts";
export function CoffeCardCart() {
  return (
    <CoffeeCardCartContainer>
      <div>
        <img src={CoffeeImg} />
        <div>
          <RegularText color='subtitle'>Expresso Tradicional</RegularText>
        </div>
        <ActionsContainer>

        </ActionsContainer>
      </div>
      <p>R$ 9,90</p>
      <p />
    </CoffeeCardCartContainer>
  );
}
