import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="Coffee Delivery Logo - copo de café escrito delivery" />
      </div>
      <div className="headerInfos container">
        <div className="local">
          <MapPin size={16} />
          Porto Alegre, RS
        </div>
        <span className="headerCar container">
          <ShoppingCart size={16} weight="fill" />
        </span>
      </div>
    </HeaderContainer>
  );
}
