import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DemoText from "./components/DemoText";
import CheckoutForm from "./components/CheckoutForm";

import api from "./api";

import "./App.css";

const stripePromise = api.getPublicStripeKey().then(key => loadStripe(key));

export default function App() {
  return (
    <div className="App">
      <div className="sr-root">
        <div className="sr-main">
          <h1>Art pls!</h1>
          <h4>Support artists with mini-commissions</h4>

          <br />

          <h3>How it works</h3>
          <h4>1. Enter your email</h4>
          <h4>2. Tell us what you'd like</h4>
          <h4>3. Pay £5</h4>
          <h4>4. We'll spend 30mins on your mini-commision</h4>
          <h4>
            5. They'll email you your picture when it's done{" "}
            <span role="img" aria-label="boom">
              💥
            </span>
          </h4>
          <h4>
            6. If you want to buy a real copy, you'll be able to contact the
            artist
          </h4>

          <br />

          <h3>So, what'll it be?</h3>

          <div className="sr-combo-inputs">
            <div className="sr-combo-inputs-row">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="dotty@spotty.com"
                autoComplete="cardholder"
                className="sr-input"
              />
            </div>
            <div className="sr-combo-inputs-row">
              <input
                type="text"
                id="commission-description"
                name="commission-description"
                placeholder="I'd like a flying giraffe please"
                autoComplete="cardholder"
                className="sr-input"
              />
            </div>
          </div>

          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
      <div className="demotext-container">
        <DemoText />
      </div>
    </div>
  );
}
