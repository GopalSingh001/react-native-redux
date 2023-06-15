import { ADD_TO_CART } from "../Constants";

interface Product {
  name: string;
  color: string;
  price: number;
  image: string;
}

export function addToCart(item: Product) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
