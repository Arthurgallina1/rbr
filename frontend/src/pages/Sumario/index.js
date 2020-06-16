import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import CartNavbar from "../../components/CartNavbar";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { formatter } from "../../services/utils";
import {
    SumarioContainer,
    CarrinhoBox,
    SorteioBox,
    TotalBox,
    PagarButton,
    CarrinhoTable,
} from "./styles";

export default function Sumario() {
    const [groupedBySorteioId, setGroupedBySorteioId] = useState("");
    const [totalValue, setTotalValue] = useState(0);
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

    useMemo(() => {
        if (carrinho.length > 0) {
            var totalPrice = carrinho.reduce(
                (acc, rifa) => acc + rifa.preco,
                0
            );
        }
        setTotalValue(formatter.format(totalPrice));
    }, [carrinho]);

    useEffect(() => {
        const group = groupBySorteioId(carrinho, "sorteio_id");
        setGroupedBySorteioId(group);
    }, [carrinho]);

    return (
        <SumarioContainer>
            <Navbar centerText='Carrinho' />
            <CartNavbar />

            <CarrinhoBox>
                {carrinho.length > 0 ? (
                    <>
                        <SorteioBox>
                            {/* {carrinho && <h3>Sorteio #{carrinho[0]?.sorteio_id}</h3>} */}
                            <h3>Carrinho</h3>
                            <CarrinhoTable>
                                <thead>
                                    <tr>
                                        <th>Número</th>
                                        <th># Sorteio</th>
                                        <th>Preço</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carrinho.map((rifa) => (
                                        <tr key={rifa.id}>
                                            <td>{rifa.numero}</td>
                                            <td>{rifa.sorteio_id}</td>
                                            <td>
                                                {formatter.format(rifa.preco)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </CarrinhoTable>
                        </SorteioBox>
                        <TotalBox>
                            <span>Subtotal: {totalValue}</span>
                            <Link to='/pagamento'>
                                <PagarButton>PAGAR</PagarButton>
                            </Link>
                        </TotalBox>
                    </>
                ) : (
                    <h3>Seu carrinho está vazio!</h3>
                )}
            </CarrinhoBox>

            {/* <SorteioBox>
          <h3>Sorteio #1</h3>
          <h5>Números selecionados</h5>
          <span>1 5 7 2 9 21 48 </span> <br />
          <span>Preço: R$25.00</span>
        </SorteioBox> */}
        </SumarioContainer>
    );
}
