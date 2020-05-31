import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { BuscarContainer, TopContainer, ResultadosBox, Card } from "./styles";
import api from "../../services/api";
import SorteioCard from "../../components/SorteioCard";

export default function Buscar() {
    const [sorteios, setSorteios] = useState([]);

    useEffect(() => {
        async function getSorteios() {
            const response = await api.get("/sorteio");
            if (response.data.success) {
                setSorteios(response.data.response);
            } else {
            }
        }
        getSorteios();
    }, []);

    return (
        <BuscarContainer>
            <Navbar centerText='Voltar' />
            <div className='input-box'>
                <label htmlFor='buscar'>
                    <strong>Buscar</strong>
                </label>
                <input name='buscar' type='text' placeholder='Buscar...' />
            </div>

            <TopContainer>
                <big>
                    <strong>Melhores resultados</strong>
                </big>

                <ResultadosBox>
                    {sorteios.map((sorteio) => (
                        <SorteioCard key={sorteio.id} sorteio={sorteio} />
                    ))}
                </ResultadosBox>
            </TopContainer>
        </BuscarContainer>
    );
}
