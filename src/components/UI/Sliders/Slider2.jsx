import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions/actionTypes";

import "swiper/components/scrollbar/scrollbar.scss";
import "./Slider2.scss";

SwiperCore.use([Scrollbar]);

function Slider2(props) {
  return (
    <div className="slider__two">
      <Swiper
        className="slider__twoMain"
        spaceBetween={10}
        slidesPerView={props.item_nums}
        scrollbar={true}
      >
        {props.products.map((product) => {
          const item = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
          };
          return (
            <SwiperSlide key={product.id}>
              <div className="slider__product">
                <img src={product.image} alt="" />
                <div
                  className="to__basket"
                  onClick={() => props.addToBasket(item)}
                >
                  <AddShoppingCartIcon />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (item) =>
      dispatch({ type: actionTypes.ADD_TO_BASKET, item: item }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider2);
