import { TitleText } from "../../../components/Texts";
import { MenuCard } from "../MenuCard";
import { MenuContainer } from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <TitleText size="l" color="subtitle" className="container">
        Nossos Cafés
      </TitleText>
      <MenuCard/>
    </MenuContainer>
  );
}
