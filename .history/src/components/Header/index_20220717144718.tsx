import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/logo.svg'


export function Header() {
  return (
    <nav>
      <div>
        <img src={Logo} alt=""/>
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
    </nav>
  )
}