//react hooks
import { useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/reducers/AuthReducer/actions";
//router-dom
import { Link } from "react-router-dom";
//react icon
import { HiOutlineUserCircle } from "react-icons/hi";
//style
import style from "./style.module.css";

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
