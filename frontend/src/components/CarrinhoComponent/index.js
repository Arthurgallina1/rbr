import React from "react";
import { SelectedButton, CarrinhoBox } from "./styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { formatter } from "../../services/utils";
export default function CarrinhoComponente({ rifasSelecionadas }) {
  const carrinho = useSelector((state) => state.carrinho.items);
  return (
    <CarrinhoBox>
      <FaShoppingCart size={24} color={"#fff"} />

      <div className="box">
        Números selecionados <br />
        {carrinho.map((rifa) => (
          <span key={rifa.numero}>{rifa.numero}, </span>
        ))}
        <br />
        <strong>Total: </strong>
        {carrinho.length}
        <br />
        <strong>Total: </strong>{" "}
        {carrinho[0] && formatter.format(carrinho.length * carrinho[0].preco)}
      </div>
      <Link to="/sumario">
        <SelectedButton>
          <MdAttachMoney size={24} color={"#fff"} />
          Ir para carrinho
        </SelectedButton>
      </Link>
    </CarrinhoBox>
  );
}
