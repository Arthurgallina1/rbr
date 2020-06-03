import React from "react";
import { NavBox } from "./styles";
import { BsCreditCard, BsBookmark } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

export default function index({ etapa }) {
  const pagamentoOpacity = etapa == "pagamento" ? "1" : "0.5";
  const resumoOpacity = etapa == "resumo" ? "1" : "0.5";
  // const activeColor = active
  return (
    <NavBox>
      <div className="box">
        <FiShoppingCart size={30} color={"#3bb82e"} />
        <span>CARRINHO</span>
      </div>
      <div className="box">
        <BsCreditCard
          size={30}
          color={"#3bb82e"}
          style={{ opacity: pagamentoOpacity }}
        />
        <span>PAGAMENTO</span>
      </div>{" "}
      <div className="box" style={{ opacity: resumoOpacity }}>
        <BsBookmark size={30} color={"#3bb82e"} />
        <span>RESUMO</span>
      </div>
    </NavBox>
  );
}
