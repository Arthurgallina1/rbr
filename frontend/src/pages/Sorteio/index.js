import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import MapaDeRifa from "../../components/MapaDeRifa";
import { dataFormatador } from "../../services/utils";

import {
    ImgSlider,
    SorteioContainer,
    InfoContainer,
    InfoBox,
    SumarioBox,
    EntradaButton,
} from "./styles";
import api from "../../services/api";

export default function Sorteio({ match }) {
    const [sorteio, setSorteio] = useState({});
    const [showRifas, setShowRifas] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const sorteio_id = match.params.id;
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    useEffect(() => {
        async function getSorteioInfo() {
            const response = await api.get(`sorteio/${sorteio_id}`);
            if (response.data.success) {
                setSorteio(response.data.sorteioAllInfo);
            }
        }
        getSorteioInfo();
    }, []);
    return (
        <SorteioContainer>
            <Navbar centerText='Sorteio' />
            <Carousel imgArray={sorteio.fotosArray} />
            {/* <ImgSlider>
        {sorteio && (
          <img src={`http://${sorteio.fotosArray?.[0].url}`} alt="" />
        )}
      </ImgSlider> */}
            <InfoContainer>
                <h2>{sorteio.titulo}</h2>

                <div className='hosted-box'>
                    <span>
                        <strong>
                            Realizado <br /> por
                        </strong>
                    </span>
                    <img src='https://picsum.photos/50' alt='' />
                    <div className='name-box'>
                        <h3 className='green'>{sorteio.name}</h3>
                        <h4>Florianópolis - SC</h4>
                    </div>
                </div>
                <InfoBox>
                    <div className='info-box'>
                        <strong>
                            {formatter.format(sorteio.preco_por_rifa)}
                        </strong>
                        <small>por rifa</small>
                    </div>
                    <div className='info-box'>
                        <strong>{sorteio.quantidade_rifas}</strong>
                        <small>rifas</small>
                    </div>
                    <div className='info-box'>
                        <strong>
                            {sorteio.data_sorteio &&
                                dataFormatador(sorteio.data_sorteio)}
                        </strong>
                        <small>data do sorteio</small>
                    </div>
                </InfoBox>
                <h3 className='green center'>
                    {sorteio?.count?.count} rifas disponíveis!!
                </h3>
                <EntradaButton onClick={setShowRifas}>
                    <strong>VER RIFAS </strong>
                </EntradaButton>
                <SumarioBox>
                    <div className='sumario-box'>
                        <h3 className='green'>
                            Descrição do Sorteio #{sorteio.id}
                        </h3>
                        <p>{sorteio.descricao}</p>
                    </div>
                    {/* <div className="sumario-box">
            <h3 className="green">Premiação</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              eius tenetur tempora error doloribus alias?
            </p>
          </div> */}
                </SumarioBox>

                {/* se ganhador mostra box com infos do ganhador */}
                {/* <EntradaButton onClick={setShowRifas}>
          <strong>Ver entradas</strong>
        </EntradaButton> */}
                {/* {showRifas && <MapaDeRifa rifas={sorteio.rifas} />} */}

                {sorteio.rifas && (
                    <MapaDeRifa sorteio_id={sorteio_id} rifas={sorteio.rifas} />
                )}
            </InfoContainer>
        </SorteioContainer>
    );
}
