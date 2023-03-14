//redux
import { useSelector } from "react-redux";
//router-dom
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element }) {
  const { isAuth } = useSelector((state) => state.AuthReducer);
  return isAuth ? element : <Navigate to={"/login"} />;
}
