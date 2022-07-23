import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { useCart } from "../../hooks/useCart";
import { HeaderButton, HeaderButtonBase, HeaderContainer } from "./styles";

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img
            src={Logo}
            alt="Coffee Delivery Logo - copo de café escrito delivery"
          />
        </NavLink>
      </div>
      <div>
        <HeaderButton>
          <HeaderButtonBase variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButtonBase>
          <HeaderButtonBase variant="yellow">
            { cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <NavLink to="/completeorder">
              <ShoppingCart size={20} weight="fill" />
            </NavLink>
          </HeaderButtonBase>
        </HeaderButton>
      </div>
    </HeaderContainer>
  );
}
