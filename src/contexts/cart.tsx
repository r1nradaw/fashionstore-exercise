import { Dispatch, SetStateAction, createContext } from "react";

export interface IProductCart {
  [key: string]: number;
}
interface ICartContext {
  productInCart: IProductCart;
  setProductCountInCart: Dispatch<SetStateAction<IProductCart>>;
}
export const CartContext = createContext<ICartContext | null>(null);
