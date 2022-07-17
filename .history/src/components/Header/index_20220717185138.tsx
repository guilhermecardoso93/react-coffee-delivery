import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/logo.svg";
import { HeaderButton, HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} alt="Coffee Delivery Logo - copo de café escrito delivery" />
      </div>
      <div className="headerInfos">
        <HeaderButton>
          <MapPin size={20} weight='fill'/>
          Porto Alegre, RS
        </HeaderButton>
        <HeaderButton>
          <ShoppingCart size={16} weight="fill" />
        </HeaderButton>
      </div>
    </HeaderContainer>
  );
}
