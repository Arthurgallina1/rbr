import React from "react";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import { useSelector } from "react-redux";
import history from "../../services/history";
import Navbar from "../../components/Navbar";
import { PerfilContainer, HeaderBox, EditarButton } from "./styles";
import TabsPerfil from "../../components/TabsPerfil";
import FileInput from "../../components/FileInput";
import Button from "../../components/Button";

export default function Perfil() {
    const user = useSelector((state) => state.auth.user);
    function handleChange() {}
    return (
        <PerfilContainer>
            <Navbar centerText='Perfil' />
            <HeaderBox>
                <Form>
                    <FileInput
                        name='files'
                        type='file'
                        styled
                        // onChange={handleChange}
                    />
                </Form>

                <h2>{user.name}</h2>
                <h5>{user.email}</h5>
                <Button
                    handleAction={() => history.push("/editarperfil")}
                    btnText={"Editar perfil"}
                />
            </HeaderBox>
            <TabsPerfil />
        </PerfilContainer>
    );
}
