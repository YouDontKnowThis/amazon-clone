import React from "react";
import moment from "moment";
import CheckoutProduct from "../../Checkout/CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import "./Order.scss";

function Order(props) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order__id">
        <small>{props.order.id}</small>
      </p>
      {props.order.data.basket?.map((checkoutP) => {
        return (
          <CheckoutProduct
            id={checkoutP.id}
            key={checkoutP.id}
            title={checkoutP.title}
            image={checkoutP.image}
            price={checkoutP.price}
            hideButton
          />
        );
      })}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total : {value}</h3>
          </>
        )}
        decimalScale={2}
        value={props.order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
