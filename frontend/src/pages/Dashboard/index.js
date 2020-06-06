import React from "react";
import api from "../../services/api";
import { signOut } from "../../store/modules/auth/actions";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Container, TextBox, ButtonBox, Button } from "./styles";

export default function Dashboard() {
    return (
        <Container>
            {/* <Navbar /> */}
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
                <Link to='/sediar'>
                    <Button main>Sediar Rifa</Button>
                </Link>
                <Link to='/buscar'>
                    <Button className='white' secundary>
                        Buscar Rifa
                    </Button>
                </Link>
                <Link to='/perfil'>
                    <Button styles={{ background: "#004ae0" }}>
                        Meu Perfil
                    </Button>
                </Link>
            </ButtonBox>
        </Container>
    );
}
