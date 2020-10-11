import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import "./Header.scss";

function Header(props) {
  const loginOutAuthentication = () => {
    if (props.user) {
      auth.signOut();
    }
  };

  let toLog = "/";
  if (!props.user) {
    toLog = "/login";
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchIn" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <NavLink to={toLog}>
            <span className="header__optionLineOne">
              {props.user ? props.user.email : "Hello Doe !"}
            </span>
            <span
              onClick={loginOutAuthentication}
              className="header__optionLineTwo"
            >
              {props.user ? "Sign Out" : "Sign In"}
            </span>
          </NavLink>
        </div>
        <div className="header__option">
          <NavLink to="/">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </NavLink>
        </div>
        <div className="header__option">
          <NavLink to="/">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </NavLink>
        </div>
        <div className="header__optionShop">
          <NavLink to="/checkout">
            <ShoppingBasketIcon />
            <span className="header__optionLineOne header__optionItemsCount">
              {props.basket.length}
            </span>
          </NavLink>
        </div>
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

export default connect(mapStateToProps)(Header);
