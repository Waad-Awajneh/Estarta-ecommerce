import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutBox from "./Logout";
import style from "./style.module.css";
export default function Navbar() {
  const { isAuth } = useSelector((state) => state.AuthReducer);

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link to={"/"}>Estarta E-commerce</Link>
      </div>
      <div className={style.box}>
        {isAuth ? (
          <LogoutBox />
        ) : (
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
