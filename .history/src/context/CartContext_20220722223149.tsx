import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { Coffee } from "../pages/Home/MenuCard";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  removeCartItem: (cartItemId: number) => void;
  changeCartItemQuantity: (
    cartItem: number,
    type: "increase" | "decrease"
  ) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

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

  console.log(cartItems);

  function changeCartItemQuantity(
    cartItem: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, draft => {
      const coffeeExistisInCart = cartItems.findIndex(
        cartItem => cartItem.id === cartItem.id
      );

      if (coffeeExistisInCart >= 0) {
        const item = draft[coffeeExistisInCart];
        draft[coffeeExistisInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, draft => {
      const coffeeExistsInCart = cartItems.findIndex(
        cartItem => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantity,
        removeCartItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
