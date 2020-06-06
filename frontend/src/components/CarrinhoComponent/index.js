import React from "react";
import { SelectedButton, CarrinhoBox } from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { formatter } from "../../services/utils";
export default function CarrinhoComponente({ sorteio_id }) {
    const carrinho = useSelector((state) => state.carrinho.items);

    const carrinhoItensFilteredBySorteio = carrinho.filter(
        (rifa) => rifa.sorteio_id == sorteio_id
    );
    return (
        <CarrinhoBox>
            <FaShoppingCart size={24} color={"#fff"} />

            <div className='box'>
                Números selecionados <br />
                {carrinhoItensFilteredBySorteio.map((rifa) => (
                    <span key={rifa.numero}>{rifa.numero}, </span>
                ))}
                {/* {carrinho.map((rifa) => {
                    return (
                        rifa.sorteio_id == sorteio_id && (
                            <span key={rifa.numero}>{rifa.numero}, </span>
                        )
                    );
                })} */}
                <br />
                <strong>Total: </strong>
                {carrinhoItensFilteredBySorteio.length}
                <br />
                <strong>Total: </strong>{" "}
                {carrinhoItensFilteredBySorteio[0] &&
                    formatter.format(
                        carrinhoItensFilteredBySorteio.length *
                            carrinhoItensFilteredBySorteio[0].preco
                    )}
            </div>
            <Link to='/sumario'>
                <SelectedButton>
                    <MdAttachMoney size={24} color={"#fff"} />
                    Ir para carrinho
                </SelectedButton>
            </Link>
        </CarrinhoBox>
    );
}
