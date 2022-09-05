// React
import React, { useState, useEffect } from "react";
// Redux Toolkit
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";
// React Router
import { useNavigate } from "react-router-dom";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// Components
import Loading from "../../Shared/Loading/Loading";
import { formatPrice } from "../../Shared/Helpers/helpers";
// STRIP
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const CheckoutForm = () => {
  const { user, isLoading } = useAuth0();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const total_amount = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.subTotal,
    0
  );
  const shippingAmount = useSelector((state) => state.cart.shippingAmount);

  // Send Data to Backend
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://comfy-sloth.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, shippingAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [items, shippingAmount]);

  if (isLoading) {
    return <Loading />;
  }
  // Handle Form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setCardError("");
    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setProcessing(false);
    }
    setCardError(error?.message || "");
    setSuccess(false);
    // Confirm a PaymentIntent by payment method
    const { error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.nickname,
            email: user?.email,
          },
        },
      }
    );
    if (confirmError) {
      setCardError(confirmError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      setTimeout(() => {
        dispatch(cartActions.removeAllItems());
      }, 3000);
    }
  };

  return (
    <div>
      {success ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {user && user?.name}</h4>
          <p>Your total is {formatPrice(shippingAmount + total_amount)}</p>
          <p>Test Card Number : 4242 4242 4242 4242</p>
          <p>MM/YY : Any future date</p>
          <p>CVC : Any 3 digits</p>
        </article>
      )}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && (
          <p style={{ color: "red", marginBottom: "0" }}>{cardError}</p>
        )}
        {processing && (
          <p style={{ color: "green", marginBottom: "0" }}>
            Please Wait. Processing...
          </p>
        )}
        <button
          style={{ width: "100%", marginTop: "15px" }}
          type="submit"
          className="btn"
          disabled={!stripe || success}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
