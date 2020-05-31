import React from "react";
import api from "../../services/api";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/modules/auth/actions";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Container, TextBox, ButtonBox, Button } from "./styles";

export default function Dashboard() {
    const dispatch = useDispatch();

    api.get("/");
    return (
        <Container>
            <Navbar />
            <TextBox>
                <h2>
                    TENHA MÁXIMO ALCANCE COM SUAS RIFAS E CONCORRA AOS MELHORES
                    SORTEIOS DO BRASIL{" "}
                </h2>
                <p>
                    RifaBrasil permite que você sedie suas próprias rifas online
                    e máxime seu alcance.
                </p>
            </TextBox>
            <ButtonBox>
                <Button main>Sediar Rifa</Button>
                <Link to='/buscar'>
                    <Button className='white'>Buscar Rifa</Button>
                </Link>
            </ButtonBox>
        </Container>
    );
}
