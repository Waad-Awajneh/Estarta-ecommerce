import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { magic } from "../../magic-sdk/magic-sdk";
import { Logout } from "../../redux/reducers/AuthReducer/actions";
import style from "./style.module.css";
export default function Navbar() {
  const { isAuth } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(Logout());
  };
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link to={"/"}>Estarta E-commerce</Link>
      </div>
      <div>
        {isAuth ? (
          <Link to={"/"}>
            <button onClick={handelLogout}>Logout</button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
