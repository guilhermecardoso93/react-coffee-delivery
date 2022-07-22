import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/MenuCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleAddCoffToCart( coffer: CartItem) {
    const CoffeAlreadyExistOnCart = cartItems.findIndex((cartItem) => cartItem.id === cartItem.id)
  }

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
