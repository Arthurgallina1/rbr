const INITIAL_STATE = {
  items: [],
};

export default function carrinho(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@carrinho/ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload.rifa],
      };
    case "@carrinho/REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((rifa) => rifa.id !== action.payload.rifa.id),
      };

    default:
      return state;
  }
}
