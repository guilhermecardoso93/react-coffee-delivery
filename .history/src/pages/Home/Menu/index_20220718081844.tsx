import { TitleText } from "../../../components/Texts";
import { MenuCard } from "../MenuCard";
import { MenuContainer, MenuList } from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <TitleText size="l" color="subtitle" className="container">
        Nossos Cafés
      </TitleText>
      <MenuList>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard /> 
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard /> 
        <MenuCard />
      </MenuList>
    </MenuContainer>
  );
}
