import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./components/Checkout/Payment/Payment";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import * as actionTypes from "./store/actions/actionTypes";

const promise = loadStripe(
  "pk_test_51HYqU2FNjKOMdukzJJbI5x5iFOAMLDHWGfgmf0UhmcY9eB08pJwCVCwx4kWLCWeZ93IdblBVtBeRPWXVThptx9ur00GNr1uKaw"
);

function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        props.setUser(authUser);
      } else {
        props.logoutUser();
      }
    });
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (authUser) =>
      dispatch({ type: actionTypes.LOGIN_USER, authUser: authUser }),
    logoutUser: () => dispatch({ type: actionTypes.LOGOUT_USER }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
