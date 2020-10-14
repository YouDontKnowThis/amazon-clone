import React, { useState, useEffect } from "react";
import Order from "./Order/Order";
import { connect } from "react-redux";
import { dtb } from "../../firebase";
import "./Orders.scss";

function Orders(props) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (props.user) {
      dtb
        .collection("users")
        .doc(props.user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [props.user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Orders);
