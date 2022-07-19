import { TitleText } from "../../../components/Texts";
import { coffees } from "../../../data/coffees";
import { MenuCard } from "../MenuCard";
import { MenuContainer, MenuList } from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <TitleText size="l" color="subtitle" className="container">
        Nossos Cafés
      </TitleText>
      <MenuList>
        {coffees.map((coffee) =>  (
          <MenuCard key={coffee.id} coffee={coffee}/>
        ))}
        
      </MenuList>
    </MenuContainer>
  );
}
