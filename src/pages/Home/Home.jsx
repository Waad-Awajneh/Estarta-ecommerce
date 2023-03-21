import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//style
import style from "./style.module.css";

export default function Home() {
  const { isAuth } = useSelector((state) => state.AuthReducer);

  return (
    <div className={style.home}>
      <h1> Welcome to Estarta E-commerce </h1>
      {isAuth ? (
        <button>
          <Link to={"/products"}>Start Shopping</Link>
        </button>
      ) : (
        <button>
          <Link to={"/login"}>Login, to start shopping </Link>
        </button>
      )}
    </div>
  );
}
