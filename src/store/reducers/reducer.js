import * as actionTypes from "../actions/actionTypes";

const initialState = {
  basket: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case actionTypes.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can\'t Remove Product (id: ${action.id} ) as it's not in Basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.authUser,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
