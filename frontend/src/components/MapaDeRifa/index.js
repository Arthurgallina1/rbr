import React from "react";
import { MapaContainer, RifaBox } from "./styles";
import Rifa from "../Rifa";

export default function MapaDeRifa({ rifas }) {
    return (
        <MapaContainer>
            Sorteio #3203
            <RifaBox>
                {rifas.map((rifa) => (
                    <Rifa key={rifa.numero} rifa={rifa}></Rifa>
                ))}
            </RifaBox>
        </MapaContainer>
    );
}
