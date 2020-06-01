import React, { useMemo } from "react";
import { Card } from "./styles";
import { format, parseISO } from "date-fns";
import history from "../../services/history";

export default function SorteioCard({ sorteio }) {
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    const dataFormatada = useMemo(() => {
        const parsedDate = parseISO(sorteio.data_sorteio);
        return format(parsedDate, "dd/MM/yyyy");
    });

    function handleClick(sorteio_id) {
        history.push(`/sorteio/${sorteio_id}`);
    }

    return (
        <Card onClick={() => handleClick(sorteio.id)}>
            <img src='https://picsum.photos/75' alt='' />
            <div className='text-box'>
                <h4>{sorteio.titulo}</h4>
                <small>#{sorteio.id}</small>
                <div className='info-box'>
                    <div className='info-unit'>
                        <span className='price'>
                            {formatter.format(sorteio.preco_por_rifa)}
                        </span>
                        <small>por rifa</small>
                    </div>
                    <div className='info-unit'>
                        <span className='price'>
                            {sorteio.quantidade_rifas}
                        </span>
                        <small>rifas</small>
                    </div>
                    <div className='info-unit'>
                        <span className='price'>{dataFormatada}</span>
                        <small>sorteio</small>
                    </div>{" "}
                </div>
            </div>
        </Card>
    );
}
