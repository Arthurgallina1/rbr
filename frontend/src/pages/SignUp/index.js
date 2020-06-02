import React from "react";
import { Container, HeaderDiv, Bar, LoginButton } from "./styles";
import { Form, Input } from "@rocketseat/unform";
import { Link } from "react-router-dom";
import api from "../../services/api";
// import Input from "../../components/Input";

export default function SignUp() {
  async function handleSubmit(data) {
    const { name, user, email, password } = data;
    try {
      const response = await api.post("/user/store", {
        name,
        user,
        email,
        password,
      });
      if (response.data.success) {
        //criado com sucesso
      }
    } catch (err) {}
  }

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
          Crie uma conta para se juntar a maior plataforma de rifas do Brasil!
        </span>
      </HeaderDiv>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="user" type="text" placeholder="CPF" />
        <Input name="password" type="password" placeholder="Senha" />
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirmar senha"
        />
        <LoginButton type="submit">Criar conta</LoginButton>
        <span className="footer-span">
          Já possui conta?{" "}
          <Link to="/login">
            <span className="link">Clique aqui.</span>
          </Link>
        </span>
      </Form>
    </Container>
  );
}
