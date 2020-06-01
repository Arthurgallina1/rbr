import React, { useState } from "react";
import { RifaBox } from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";
export default function Rifa({
    rifa,
    setRifasSelecionadas,
    rifasSelecionadas,
}) {
    const [isSelected, setIsSelected] = useState(false);
    function handleClick() {
        !isSelected
            ? setRifasSelecionadas([...rifasSelecionadas, rifa.numero])
            : setRifasSelecionadas(
                  rifasSelecionadas.filter((num) => num != rifa.numero)
              );

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
