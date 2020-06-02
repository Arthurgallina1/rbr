export function AddRifaToCart(rifa) {
  return {
    type: "@carrinho/ADD_TO_CART",
    payload: { rifa },
  };
}

export function RemoveRifaFromCart(rifa) {
  return {
    type: "@carrinho/REMOVE_FROM_CART",
    payload: { rifa },
  };
}
