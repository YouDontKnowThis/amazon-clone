import React from "react";
import * as actionTypes from "../../../store/actions/actionTypes";
import { connect } from "react-redux";
import "./CheckoutProduct.scss";

function CheckoutProduct(props) {
  return (
    <div className="checkoutProduct">
      <img className="image" src={props.image} alt="" />
      <div className="info">
        <p className="title">{props.title}</p>
        <p className="price">{props.price}</p>

        <button onClick={() => props.removeFromBasket(props.id)}>
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

const mapDispatchFromProps = (dispatch) => {
  return {
    removeFromBasket: (id) =>
      dispatch({ type: actionTypes.REMOVE_FROM_BASKET, id: id }),
  };
};
export default connect(null, mapDispatchFromProps)(CheckoutProduct);
