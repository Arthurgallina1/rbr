import React, { useState } from "react";
import { MapaContainer, RifaBox, SelectedButton, CarrinhoBox } from "./styles";
import Rifa from "../Rifa";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

export default function MapaDeRifa({ rifas }) {
    const [rifasSelecionadas, setRifasSelecionadas] = useState([]);
    return (
        <MapaContainer>
            Sorteio #3203
            <br />
            <CarrinhoBox>
                <FaShoppingCart size={24} color={"#fff"} />

                <div className='box'>
                    Números selecionados <br />
                    {rifasSelecionadas.map((rifa) => (
                        <span>{rifa}, </span>
                    ))}
                    <br />
                    <strong>Total: {rifasSelecionadas.length}</strong>
                </div>
                <Link to='/pagamento'>
                    <SelectedButton>
                        <MdAttachMoney size={24} color={"#fff"} />
                        Pagamento
                    </SelectedButton>
                </Link>
            </CarrinhoBox>
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
