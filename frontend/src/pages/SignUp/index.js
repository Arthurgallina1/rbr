import React from "react";
import { Container, HeaderDiv, Bar, LoginButton } from "./styles";
import { Form, Input } from "@rocketseat/unform";
import { Link } from "react-router-dom";

// import Input from "../../components/Input";

export default function SignUp() {
    function handleSubmit(data) {}

    return (
        <Container>
            <Bar>
                <span>V</span>
                <span>
                    <strong>Cadastro</strong>
                </span>
                <span></span>
            </Bar>
            <HeaderDiv>
                <h2>Criar conta</h2>
                <span>
                    Crie uma conta para se juntar a maior plataforma de rifas do
                    Brasil!
                </span>
            </HeaderDiv>
            <Form onSubmit={handleSubmit}>
                <Input name='nome' type='text' placeholder='Nome' />
                <Input name='email' type='email' placeholder='E-mail' />
                <Input name='cpf' type='text' placeholder='CPF' />
                <Input name='password' type='password' placeholder='Senha' />
                <Input
                    name='confirm_password'
                    type='password'
                    placeholder='Confirmar senha'
                />
                <LoginButton type='submit'>Criar conta</LoginButton>
                <span className='footer-span'>
                    Já possui conta?{" "}
                    <Link to='/login'>
                        <span className='link'>Clique aqui.</span>
                    </Link>
                </span>
            </Form>
        </Container>
    );
}
