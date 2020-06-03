import React from "react";
import Navbar from "../../components/Navbar";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import { PagamentoContainer, Form, CreateButton } from "./styles";
import Input from "../../components/Input";
import InputSelect from "../../components/InputSelect";
import CartNavbar from "../../components/CartNavbar";

export default function Pagamento() {
  function handlePayment(data) {
    console.log(data);
  }

  return (
    <PagamentoContainer>
      <Navbar centerText="Pagamento" />
      <CartNavbar etapa={"pagamento"} />

      <Form onSubmit={handlePayment}>
        <Input
          name="nome_completo"
          type="text"
          placeholder="Nome completo igual está no cartão"
        />
        <Input name="card_number" type="text" placeholder="Número do cartão" />
        <div className="expiration-box">
          <InputSelect name="card_month" placeholder="Mês" />
          <InputSelect name="card_year" placeholder="Ano" />
        </div>
        <Input name="card_cvv" type="text" placeholder="Código de segurança" />
        <div className="ccv-box">
          <Toggle
            id="default_card"
            defaultChecked={false}
            onChange={() => {}}
          />
          <label htmlFor="cheese-status">Salvar cartão</label>
        </div>

        <CreateButton type="submit">
          <strong>Pagar</strong>
        </CreateButton>
      </Form>
    </PagamentoContainer>
  );
}
