import React, { useState } from "react";
import { RifaBox } from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  AddRifaToCart,
  RemoveRifaFromCart,
} from "../../store/modules/carrinho/actions";
import { useDispatch } from "react-redux";

export default function Rifa({
  rifa,
  setRifasSelecionadas,
  rifasSelecionadas,
}) {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  function handleClick() {
    // !isSelected
    //   ? setRifasSelecionadas([...rifasSelecionadas, rifa])
    //   : setRifasSelecionadas(
    //       rifasSelecionadas.filter((num) => num != rifa.numero)
    //     );
    !isSelected
      ? dispatch(AddRifaToCart(rifa))
      : dispatch(RemoveRifaFromCart(rifa));

    setIsSelected(!isSelected);
  }
  return (
    <RifaBox
      disponivel={rifa.disponivel}
      disabled={!rifa.disponivel}
      selected={isSelected}
      onClick={handleClick}
    >
      {/* {isSelected && <AiFillCheckCircle color={"#fff"} size={14} />} */}
      {rifa.numero}
    </RifaBox>
  );
}
