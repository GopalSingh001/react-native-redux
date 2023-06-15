import { ADD_TO_CART } from '../Constants';

interface Product {
  name: string;
  color: string;
  price: number;
  image: string;
}

interface State {
  cartItems: Product[];
}

const initialState: State = {
  cartItems: [],
};

interface Action {
  type: string;
  data: Product;
}

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.data],
      };
    default:
      return state;
  }
};
