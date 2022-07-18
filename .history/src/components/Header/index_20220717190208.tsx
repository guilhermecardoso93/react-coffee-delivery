import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/logo.svg";
import { HeaderButton, HeaderButtonBase, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} alt="Coffee Delivery Logo - copo de café escrito delivery" />
      </div>
      <HeaderButton>
        <HeaderButtonBase variant="purple">
          <MapPin size={20} weight='fill'/>
          Porto Alegre, RS
        </HeaderButtonBase>
        <HeaderButtonBase variant="yellow">
          <ShoppingCart size={20} weight="fill" />
        </HeaderButtonBase>
      </HeaderButton>
    </HeaderContainer>
  );
}
