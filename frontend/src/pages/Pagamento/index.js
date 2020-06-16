import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Navbar from "../../components/Navbar";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import { PagamentoContainer, Form, CreateButton } from "./styles";
import Input from "../../components/Input";
import InputSelect from "../../components/InputSelect";
import CartNavbar from "../../components/CartNavbar";
import api from "../../services/api";
export default function Pagamento() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    async function getPayment() {
      const response = await api.post("/stripe", {});
      console.log(response.data);
      setClientSecret(response.data.clientSecret);
    }
    getPayment();
  }, []);
  function handlePayment(data) {
    console.log(data);
  }

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: ev.target.name.value,
        },
      },
    });
    console.log(payload);

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form id="payment-form" onSubmit={(e) => handleSubmit(e)}>
      <CardElement id="card-element" onChange={handleChange} />

      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
        </span>
      </button>

      {/* 
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}


      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          {" "}
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p> */}
    </form>

    // <PagamentoContainer>
    //   <Navbar centerText="Pagamento" />
    //   <CartNavbar etapa={"pagamento"} />

    //   <Form onSubmit={handlePayment}>
    //     <Input
    //       name="nome_completo"
    //       type="text"
    //       placeholder="Nome completo igual está no cartão"
    //     />
    //     <Input name="card_number" type="text" placeholder="Número do cartão" />
    //     <div className="expiration-box">
    //       <InputSelect name="card_month" placeholder="Mês" />
    //       <InputSelect name="card_year" placeholder="Ano" />
    //     </div>
    //     <Input name="card_cvv" type="text" placeholder="Código de segurança" />
    //     <div className="ccv-box">
    //       <Toggle
    //         id="default_card"
    //         defaultChecked={false}
    //         onChange={() => {}}
    //       />
    //       <label htmlFor="cheese-status">Salvar cartão</label>
    //     </div>
    //     <CreateButton type="submit">
    //       <strong>Pagar</strong>
    //     </CreateButton>
    //   </Form>
    // </PagamentoContainer>
  );
}
