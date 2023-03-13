import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { Logout } from "../../redux/reducers/AuthReducer/actions";

import { HiOutlineUserCircle } from "react-icons/hi";
export default function LogoutBox() {
  const [isOpenLogoutBox, setIsOpenLogoutBox] = useState(false);
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(Logout());
  };
  return (
    <>
      <HiOutlineUserCircle
        size={30}
        onClick={() => setIsOpenLogoutBox(!isOpenLogoutBox)}
      />
      {isOpenLogoutBox && (
        <div className={style.LogoutBox}>
          <p>{user.email}</p>
          <Link to={"/"}>
            <button onClick={handelLogout}>Logout</button>
          </Link>
        </div>
      )}
    </>
  );
}
