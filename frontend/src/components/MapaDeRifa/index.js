import React, { useState } from "react";
import { MapaContainer, RifaBox, SelectedButton, CarrinhoBox } from "./styles";
import Rifa from "../Rifa";
import CarrinhoComp from "../CarrinhoComponent";
export default function MapaDeRifa({ rifas, sorteio_id }) {
    const [rifasSelecionadas, setRifasSelecionadas] = useState([]);

    return (
        <MapaContainer>
            <br />
            <CarrinhoComp
                rifasSelecionadas={rifasSelecionadas}
                sorteio_id={sorteio_id}
            />
            <RifaBox>
                {rifas.map((rifa) => (
                    <Rifa
                        key={rifa.numero}
                        rifa={rifa}
                        setRifasSelecionadas={setRifasSelecionadas}
                        rifasSelecionadas={rifasSelecionadas}
                    />
                ))}
            </RifaBox>
            {/* <SelectedButton></SelectedButton> */}
        </MapaContainer>
    );
}
