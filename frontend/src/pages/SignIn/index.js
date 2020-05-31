import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { Container, HeaderDiv, Bar, LoginButton } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInRequest } from "../../store/modules/auth/actions";
import Navbar from "../../components/Navbar";

export default function SignIn() {
    const dispatch = useDispatch();

    function handleSubmit({ username, password }) {
        dispatch(signInRequest(username, password));
    }

    return (
        <Container>
            <Navbar />
            <HeaderDiv>
                <h2>Vamos começar</h2>
                <span>
                    Crie uma conta para se juntar a maior plataforma de rifas do
                    Brasil!
                </span>
            </HeaderDiv>
            <Form onSubmit={handleSubmit}>
                <Input name='username' type='text' placeholder='E-mail' />
                <Input name='password' type='password' placeholder='Senha' />

                <LoginButton type='submit'>Login</LoginButton>
                <span className='footer-span'>
                    Não possui conta?{" "}
                    <Link to='/cadastrar'>
                        <span className='link'>Clique aqui.</span>
                    </Link>
                </span>
            </Form>
        </Container>
    );
}
