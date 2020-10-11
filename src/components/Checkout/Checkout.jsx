import React from "react";
import Subtotal from "./Subtotal/Subtotal";
import { connect } from "react-redux";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

import "./Checkout.scss";

function Checkout(props) {
  const listItems = props.basket.map((checkoutP) => {
    return (
      <CheckoutProduct
        id={checkoutP.id}
        key={checkoutP.id}
        title={checkoutP.title}
        image={checkoutP.image}
        price={checkoutP.price}
      />
    );
  });

  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816udYiX0wU.jpg"
            alt=""
          />
          <div>
            <h3>{`Hello, ${props.user ? props.user.email : "Doe!"}`}</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <div>{listItems}</div>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Checkout);
