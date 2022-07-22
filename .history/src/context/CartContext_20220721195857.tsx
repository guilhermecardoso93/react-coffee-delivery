import { createContext, ReactNode, useState } from "react"
import { Coffee } from "../pages/Home/MenuCard"

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItem: CartItem[]
}

interface CartContextProviderProps {
  children: ReactNode;
}


export const CartContext = createContext(({} as CartContextType ))

export function CartContextProvider(){
  const [ cartITem, setCartItem] = useState<CartItem[]>([])
  return (
    <CartContext.Provider value={{cartItem}}>

    </CartContext.Provider>
  )
}