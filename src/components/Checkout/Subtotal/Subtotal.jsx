import React from "react";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Subtotal.scss";

function Subtotal(props) {
  const history = useHistory();
  let totalPrice = props.basket
    .map((total) => {
      return total.price;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal {`(${props.basket.length} items) `} :
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order Contain a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Purchase To Checkout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

export default connect(mapStateToProps)(Subtotal);
