import React from "react";
import { NavBox } from "./styles";
import { BsCreditCard, BsBookmark } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

export default function index() {
  // const activeColor = active
  return (
    <NavBox>
      <div className="box">
        <FiShoppingCart size={30} color={"#3bb82e"} />
        <span>CARRINHO</span>
      </div>
      <div className="box">
        <BsCreditCard size={30} color={"#3bb82e"} />
        <span>PAGAMENTO</span>
      </div>{" "}
      <div className="box" style={{ opacity: "0.45" }}>
        <BsBookmark size={30} color={"#3bb82e"} />
        <span>RESUMO</span>
      </div>
    </NavBox>
  );
}
