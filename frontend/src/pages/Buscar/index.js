import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { BuscarContainer, TopContainer, ResultadosBox, Card } from "./styles";
import api from "../../services/api";
import SorteioCard from "../../components/SorteioCard";
import { AiOutlineSearch } from "react-icons/ai";

export default function Buscar() {
    const [sorteios, setSorteios] = useState([]);
    const [sorteiosFiltrados, setSorteiosFiltrados] = useState([]);

    useEffect(() => {
        async function getSorteios() {
            const response = await api.get("/sorteio");
            if (response.data.success) {
                setSorteios(response.data.response);
                setSorteiosFiltrados(response.data.response);
            } else {
            }
        }
        getSorteios();
    }, []);

    function handleChange(e) {
        const value = e.target.value.toLowerCase();
        if (value.length > 2) {
            const filteredList = sorteios.filter((sorteio) => {
                return sorteio.titulo.toLowerCase().search(value) != -1;
            });
            setSorteiosFiltrados(filteredList);
        } else {
            setSorteiosFiltrados(sorteios);
        }
    }
    return (
        <BuscarContainer>
            <Navbar centerText='Voltar' />
            <div className='input-box'>
                <label htmlFor='buscar'>
                    <strong>Buscar</strong>
                </label>

                <div className='wrapper'>
                    <span className='fa-search'>
                        <AiOutlineSearch size={30} color={"#3bb82e"} />
                    </span>
                    <input
                        name='buscar'
                        type='text'
                        placeholder='Buscar...'
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>

            <TopContainer>
                <big>
                    <strong>Melhores resultados</strong>
                </big>

                <ResultadosBox>
                    {sorteiosFiltrados.map((sorteio) => (
                        <SorteioCard key={sorteio.id} sorteio={sorteio} />
                    ))}
                </ResultadosBox>
            </TopContainer>
        </BuscarContainer>
    );
}
