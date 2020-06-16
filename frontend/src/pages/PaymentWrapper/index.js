import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Pagamento from "../Pagamento";

// Make sure to call loadStripe outside of a component’s render to avoid

// recreating the Stripe object on every render.

// loadStripe is initialized with your real test publishable API key.

const promise = loadStripe();

export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <Pagamento />
      </Elements>
    </div>
  );
}
