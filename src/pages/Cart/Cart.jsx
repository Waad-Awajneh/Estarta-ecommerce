//redux
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../redux/reducers/CartReducer/actions";
//router-dom
import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const handelAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handelRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <>
      <div className={style.cards}>
        {cartItems.length === 0 ? (
          <h2>
            No Items in cart.
            <Link to={"/products"} className={style.link}>
              Add One !
            </Link>
          </h2>
        ) : (
          <>
            {cartItems.map((product) => {
              return (
                <div className={style.card} key={product.id}>
                  <img src={product.image_link} />
                  <div>{product.name}</div>
                  <div>$ {product.price} </div>
                  <div className={style.inputBox}>
                    <button onClick={() => handelAddToCart(product)}>+</button>
                    <input type="text" value={product.quantity} />
                    <button onClick={() => handelRemoveFromCart(product)}>
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      {cartItems.length !== 0 && (
        <h1 className={style.price}>
          Total Price :
          {cartItems.reduce(
            (total, current) => total + current.price * current.quantity,
            0
          )}
        </h1>
      )}
    </>
  );
}
