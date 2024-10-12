import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublice from "../../../hooks/useAxiosPublice";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart?.reduce((pre, current) => pre + current.price, 0);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [transectionId, setTransectionId] = useState("");
  const navigate = useNavigate();
  const [countryCode, setContryCode] = useState("");
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intern", { price: totalPrice })
        .then((res) => {
          console.log(res?.data?.clientSecret);
          setClientSecret(res?.data?.clientSecret);
        });
    }
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

        //
        const payment = {
          email: user?.email,
          price: totalPrice,
          transectionId: paymentIntent.id,
          date: new Date(), // UTC Date convert . use moment.js to
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "padding",
        };

        const res = await axiosSecure.post("/payments", payment);
        // console.log(res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          navigate("/dashboard/paymentHistory");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "your Payment Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div className="flex justify-center gap-5 mb-4">
      <div className=" w-full md:w-[60%] mb-6 bg-white shadow-2xl rounded-lg border-2">
        <form className="p-4" onSubmit={handleSubmit}>
          <h2 className="font-inter text-[18px] font-semibold mb-2">
            Credit Card
          </h2>
          <CardElement
            className="border py-2.5 pl-2"
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

          <h2 className="font-inter mt-2 text-[18px] font-semibold mb-2">
            Name
          </h2>
          <div>
            <input
              className="w-full border-2 py-2 pl-2 text-green-600"
              defaultValue={user?.displayName}
              type="text"
            />
          </div>

          <h2 className="font-inter mt-2 text-[18px] font-semibold mb-2">
            Email
          </h2>
          <div>
            <input
              className="w-full border-2 py-2 pl-2 text-green-600"
              defaultValue={user?.email}
              type="email"
            />
          </div>

          <div className="pt-4">
            <h2 className="font-inter text-[18px] font-semibold mb-2">Phone</h2>
            <PhoneInput
              country={"bd"}
              value={countryCode}
              placeholder="+880 177 503 ----"
              onChange={(value) => setContryCode(value)}
              inputStyle={{
                width: "100%",
                borderRadius: "8px",
                opacity: "0.7",
                color: "black",
                font: "bold",
              }}
              inputClass="py-5"
              dropdownStyle={{ width: "200px", marginTop: "-0.1px" }}
              buttonStyle={{ borderRadius: "8px 0 0 8px" }}
              required
            />
          </div>

          <div className="flex justify-between mt-2">
            <p className="pt-1 w-1/2">
              <h2 className="font-inter text-[18px] font-semibold mb-1">
                Date
              </h2>
              <input
                className="py-2 border-2 pl-2"
                type="text"
                placeholder="Writer a date"
              />
            </p>
            <p className="pt-1 w-1/2">
              <h2 className="font-inter text-[18px] font-semibold mb-2">
                Zipe Code
              </h2>
              <input
                className="py-2 border-2 pl-2"
                type="text"
                placeholder="Your Zipe Code"
              />
            </p>
          </div>

          <div>
            <button
              className="btn btn-sm mt-4 px-14 text-white btn-primary"
              type="submit"
              disabled={!stripe || !clientSecret}
            >
              Pay
            </button>
          </div>

          <p className="text-red-700"> {error}</p>
          {transectionId && (
            <p className="text-green-700"> Trangejtion Id {transectionId} </p>
          )}
        </form>
      </div>
      {/* <div className="rounded-lg border-2 bg-transparent md:w-1/2 w-full shadow-2xl p-3">
        <h2 className="text-2xl py-2"> Your Total Price </h2>
        <h3 className="text-5xl font-bold font-poppins pl-3 text-blue-500">
          ${totalPrice}
        </h3>
      </div> */}
    </div>
  );
};

export default CheckOutForm;
