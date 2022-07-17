import { MapPin, ShoppingCart } from "phosphor-react";
import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <span>
          <MapPin size={16} />
          Porto Alegre, RS
        </span>
        <span>
          <ShoppingCart size={16} weight="fill" />
        </span>
      </div>
    </HeaderContainer>
  );
}
