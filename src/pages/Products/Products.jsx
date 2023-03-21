import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  quantityPlus,
} from "../../redux/reducers/ProductReducer/actions";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import style from "./style.module.css";
import { addToCart } from "../../redux/reducers/CartReducer/actions";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//toastify
import { toast } from "react-toastify";

export default function Products() {
  const { products } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) dispatch(getProducts());
  }, []);

  const handelAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };
  return (
    <div className={style.cards}>
      {products.map((product) => {
        return (
          <div className={style.card} key={product.id}>
            <img src={product.image_link} />
            <div>{rating(product.rating).map((x) => x)}</div>
            <div>{product.name}</div>
            <div>{product.price} $</div>
            <button onClick={() => handelAddToCart(product)}>
              Add To Cart
            </button>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={true}
            />
          </div>
        );
      })}
    </div>
  );
}

function rating(rating) {
  let rate = [];
  for (let index = 0; index < 5; index++)
    rate[index] = index <= rating ? <AiFillStar /> : <AiOutlineStar />;
  return rate;
}
