import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartNavbar from "../../components/CartNavbar";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import {
  SumarioContainer,
  CarrinhoBox,
  SorteioBox,
  TotalBox,
  PagarButton,
} from "./styles";

export default function Sumario() {
  const [groupedBySorteioId, setGroupedBySorteioId] = useState("");
  const carrinho = useSelector((state) => state.carrinho.items);
  const groupBySorteioId = (arrayRifas, property) => {
    return arrayRifas.reduce((acc, object) => {
      let key = object[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(object.numero);
      return acc;
    }, {});
  };

  useEffect(() => {
    const group = groupBySorteioId(carrinho, "sorteio_id");
    setGroupedBySorteioId(group);
  }, [carrinho]);

  return (
    <SumarioContainer>
      <Navbar centerText="Carrinho" />
      <CartNavbar />

      <CarrinhoBox>
        <SorteioBox>
          <h3>Sorteio #1</h3>
          <h5>Números selecionados</h5>
          <span>1 5 7 2 9 21 48 </span>
          <br />
          <span>
            <strong>Preço:</strong> R$25.00
          </span>
        </SorteioBox>
        <SorteioBox>
          <h3>Sorteio #1</h3>
          <h5>Números selecionados</h5>
          <span>1 5 7 2 9 21 48 </span> <br />
          <span>Preço: R$25.00</span>
        </SorteioBox>

        <TotalBox>Preço Total: R$ 300,00</TotalBox>
        <Link to="/pagamento">
          <PagarButton>PAGAR</PagarButton>
        </Link>
      </CarrinhoBox>
    </SumarioContainer>
  );
}
