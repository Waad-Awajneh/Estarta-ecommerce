import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../redux/reducers/AuthReducer/actions";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const { loading, isAuth } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelLogin = () => {
    dispatch(Login(email));
  };
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);
  return (
    <div>
      <input
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Email"}
      />
      <button disabled={loading} onClick={handelLogin}>
        {loading ? "loading" : "Login"}
      </button>
    </div>
  );
}
