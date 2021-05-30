export const initialState = {
  basket: [],
  user: null,
};

export const TotalCartItem = (basket) => {
  const Total = basket?.reduce((amount, item) => amount + item.price, 0);
  return (Total.toFixed(2));
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_TO_BASKET':
      let CopyCart = [...state.basket];

      const index = state.basket.findIndex((indexCart) => action.item.id === indexCart.id);

      if (index >= 0) {
        CopyCart.splice(index, 1);
      }

      return {
        ...state,
        basket: CopyCart,
      };

    default:
      return state;
  }
}

export default reducer;