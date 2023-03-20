import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LogoutBox from "./Logout";
import style from "./style.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
export default function Navbar() {
  const { isAuth } = useSelector((state) => state.AuthReducer);
  const { cartItems } = useSelector((state) => state.CartReducer);

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link to={"/"}>Estarta E-commerce</Link>
      </div>
      <div className={style.box}>
        {isAuth ? (
          <>
            <div className={style.navLinks}>
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/products"}>Products</NavLink>
              <Link to={"/cart"} className={style.cart}>
                <div className={style.cartCount}>{cartItems.length}</div>
                <RiShoppingCartLine size={23} />
              </Link>
            </div>
            <LogoutBox />
          </>
        ) : (
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
