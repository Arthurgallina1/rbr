import React from "react";
import { Link } from "react-router-dom";
import history from "../../services/history";
import Navbar from "../../components/Navbar";
import { PerfilContainer, HeaderBox, EditarButton } from "./styles";
import TabsPerfil from "../../components/TabsPerfil";
export default function Perfil() {
    return (
        <PerfilContainer>
            <Navbar centerText='Perfil' />
            <HeaderBox>
                <h2>Arthur Gallina</h2>
                <h5>arthur.gallina@gmail.com</h5>
                <EditarButton onClick={() => history.push("/editarperfil")}>
                    Editar perfil
                </EditarButton>
            </HeaderBox>
            <TabsPerfil />
        </PerfilContainer>
    );
}
