import React, { useState } from "react";
import { RifaBox } from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";
export default function Rifa({ rifa }) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <RifaBox
            disponivel={rifa.disponivel}
            disabled={!rifa.disponivel}
            selected={isSelected}
            onClick={() => setIsSelected(!isSelected)}
        >
            {/* {isSelected && <AiFillCheckCircle color={"#fff"} size={14} />} */}
            {rifa.numero}
        </RifaBox>
    );
}
