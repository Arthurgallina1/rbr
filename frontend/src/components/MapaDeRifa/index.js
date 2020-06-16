import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MapaContainer, RifaBox, SelectedButton, CarrinhoBox } from "./styles";
import Rifa from "../Rifa";
import CarrinhoComp from "../CarrinhoComponent";
export default function MapaDeRifa({ rifas, sorteio_id }) {
    const carrinho = useSelector((state) => state.carrinho.items);
    const rifasSelecionadas = carrinho.map((rifa) => rifa.id);
    function checkIfSelected(id) {
        return rifasSelecionadas.includes(id) ? true : false;
    }

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
                        isSelected={checkIfSelected(rifa.id)}
                    />
                ))}
            </RifaBox>
            {/* <SelectedButton></SelectedButton> */}
        </MapaContainer>
    );
}
