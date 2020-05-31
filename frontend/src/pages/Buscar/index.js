import React from "react";
import Navbar from "../../components/Navbar";
import { BuscarContainer, TopContainer, ResultadosBox, Card } from "./styles";

export default function Buscar() {
    return (
        <BuscarContainer>
            <Navbar />
            <div className='input-box'>
                <input type='text' placeholder='Buscar...' />
            </div>

            <TopContainer>
                <big>
                    <strong>Melhores resultados</strong>
                </big>

                <ResultadosBox>
                    <Card>
                        <img src='https://via.placeholder.com/75' alt='' />
                        <div className='text-box'>
                            <h4>NOME DO SORTEIO</h4>
                            <small>#1231231</small>
                            <div className='info-box'>
                                <div className='info-unit'>
                                    <span className='price'>R$ 15.00</span>
                                    <small>por rifa</small>
                                </div>
                                <div className='info-unit'>
                                    <span className='quantidade'>5000</span>
                                    <small>rifas</small>
                                </div>
                                <div className='info-unit'>
                                    <span className='data'>29/10/2020</span>
                                    <small>sorteio</small>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <img src='https://via.placeholder.com/75' alt='' />
                        <div className='text-box'>
                            <h4>NOME DO SORTEIO</h4>
                            <small>#1231231</small>
                            <div className='info-box'>
                                <div className='info-unit'>
                                    <span className='price'>R$ 15.00</span>
                                    <small>por rifa</small>
                                </div>
                                <div className='info-unit'>
                                    <span className='quantidade'>5000</span>
                                    <small>rifas</small>
                                </div>
                                <div className='info-unit'>
                                    <span className='data'>29/10/2020</span>
                                    <small>sorteio</small>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <img src='https://via.placeholder.com/75' alt='' />
                        <div className='text-box'>
                            <h4>NOME DO SORTEIO</h4>
                            <small>#1231231</small>
                            <div className='info-box'>
                                <div className='info-unit'>
                                    <span className='price'>R$ 15.00</span>
                                    <small>por rifa</small>
                                </div>
                                <div className='info-unit'>
                                    <span className='quantidade'>5000</span>
                                    <small>rifas</small>
                                </div>
                                <div className='info-unit'>
                                    <span className='data'>29/10/2020</span>
                                    <small>sorteio</small>
                                </div>
                            </div>
                        </div>
                    </Card>
                </ResultadosBox>
            </TopContainer>
        </BuscarContainer>
    );
}
