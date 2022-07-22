import { useCart } from "../../hooks/useCart";
import { Intro } from "./Intro";
import { Menu } from "./Menu";
import { HomeContainer } from "./styles";

export function Home() {
  const { cartItems } = useCart()

  return (
    <HomeContainer>
      <Intro />
      <Menu/>
    </HomeContainer>
  );
}
