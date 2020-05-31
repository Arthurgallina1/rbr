import React from "react";
import Navbar from "../../components/Navbar";
import {
    ImgSlider,
    SorteioContainer,
    InfoContainer,
    InfoBox,
    SumarioBox,
    EntradaButton,
} from "./styles";
export default function Sorteio() {
    return (
        <SorteioContainer>
            <Navbar centerText='Sorteio' />
            <ImgSlider>
                <img src='https://picsum.photos/75' alt='' />
            </ImgSlider>
            <InfoContainer>
                <h2>Titulo do sorteio </h2>

                <div className='hosted-box'>
                    <span>
                        <strong>
                            Realizado <br /> por
                        </strong>
                    </span>
                    <img src='https://picsum.photos/50' alt='' />
                    <div className='name-box'>
                        <h3 className='green'>Vans for Bands</h3>
                        <h4>Floripa - SC</h4>
                    </div>
                </div>
                <InfoBox>
                    <div className='info-box'>
                        <strong>R$ 2.00</strong>
                        <small>por rifa</small>
                    </div>
                    <div className='info-box'>
                        <strong>500</strong>
                        <small>rifas</small>
                    </div>
                    <div className='info-box'>
                        <strong>20/05/2020</strong>
                        <small>data sorteio</small>
                    </div>
                </InfoBox>
                <SumarioBox>
                    <div className='sumario-box'>
                        <h3 className='green'>Sumário do Sorteio</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Neque eius tenetur tempora error doloribus
                            alias? Ad, at laboriosam deserunt enim dolores
                            dignissimos totam et sapiente pariatur delectus
                            doloremque praesentium rerum.
                        </p>
                    </div>
                    <div className='sumario-box'>
                        <h3 className='green'>Premiação</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Neque eius tenetur tempora error doloribus
                            alias?
                        </p>
                    </div>
                </SumarioBox>

                {/* se ganhador mostra box com infos do ganhador */}
                <EntradaButton>
                    <strong>Ver entradas</strong>
                </EntradaButton>
            </InfoContainer>
        </SorteioContainer>
    );
}
