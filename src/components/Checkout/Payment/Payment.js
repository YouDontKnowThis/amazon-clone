import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "../../../axios";
import "./Payment.scss";

function Payment(props) {
  let totalPrice = props.basket
    .map((total) => {
      return total.price;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // Generate the special stripe secret which allows us to charge a costumer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${totalPrice * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [props.basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <>
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{props.basket?.length} Items)</Link>
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{props.user?.email}</p>
              <p>123 React Line, Fake Street</p>
              <p>Khouribga, Morocco</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review Items and Delivery</h3>
            </div>
            <div className="payment__items">
              {props.basket?.map((checkoutP) => {
                return (
                  <CheckoutProduct
                    key={checkoutP.id}
                    id={checkoutP.id}
                    title={checkoutP.title}
                    image={checkoutP.image}
                    price={checkoutP.price}
                  />
                );
              })}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Methode</h3>
            </div>
            <div className="payment__details">
              {/* Here Is The Place Where Adding Card Informations */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          Subtotal {`(${props.basket.length} items) `} :
                          <strong>{` ${value}`}</strong>
                        </p>
                      </>
                    )}
                    decimalScale={2}
                    value={totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disable || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    show: state.showBackdrop,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Payment);
