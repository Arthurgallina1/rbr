import React, { useMemo } from "react";
import { Card } from "./styles";
import { format, parseISO } from "date-fns";
import history from "../../services/history";

export default function SorteioCard({ sorteio }) {
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
                        <span className='price'>{sorteio.preco_por_rifa}</span>
                        <small>por rifa</small>
                    </div>
                    <div className='info-unit'>
                        <span className='quantidade'>
                            {sorteio.quantidade_rifas}
                        </span>
                        <small>rifas</small>
                    </div>
                    <div className='info-unit'>
                        <span className='data'>{dataFormatada}</span>
                        <small>sorteio</small>
                    </div>{" "}
                </div>
            </div>
        </Card>
    );
}
