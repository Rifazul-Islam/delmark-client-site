import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = cart.reduce((pre, current) => pre + current.price, 0);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [transectionId, setTransectionId] = useState("");
  useEffect(() => {
    const res = axiosSecure
      .post("/create-payment-intern", { price: totalPrice })
      .then((res) => {
        console.log(res?.data?.clientSecret);
        setClientSecret(res?.data?.clientSecret);
      });
  }, [axiosSecure, totalPrice, setClientSecret]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // const card = elements.getElement(CardElement)
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment Error ", error);
      setError(error.message);
    } else {
      console.log("get Payment Method ", paymentMethod);
      setError(" ");
    }

    // Confirm Payment Method

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm Error ");
    } else {
      console.log("Payment Intern", paymentIntent);
      if (paymentIntent?.status === "succeeded") {
        setTransectionId(paymentIntent.id);
      }
    }
  };

  return (
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
      <button
        className="btn btn-sm mt-4 text-white btn-primary"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>

      <p className="text-red-700"> {error}</p>
      {transectionId && (
        <p className="text-green-700"> Trangejtion Id {transectionId} </p>
      )}
    </form>
  );
};

export default CheckOutForm;
