import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/MenuCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number,
 addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  
  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      cartItem => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, draft => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  console.log(cartItems)

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
