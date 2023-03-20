import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  console.log(cartItems);
  return (
    <div className={style.cards}>
      {cartItems.map((product) => {
        return (
          <div className={style.card} key={product.id}>
            <img src={product.image_link} />
            <div>{product.name}</div>
            <div>{product.quantity}</div>
            <div>{product.price} $</div>
            <button onClick={() => handelAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
