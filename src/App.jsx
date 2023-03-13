import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/NavBar/Navbar";

const LoginPage = lazy(() => import("./pages/Login/Login"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Home = lazy(() => import("./pages/Home/Home"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Products = lazy(() => import("./pages/Products/Products"));

function App() {
  const { loading } = useSelector((state) => state.AuthReducer);

  if (loading) return <Loading />;

  return (
    <div className="App">
      <Suspense fallback="Loading .....">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
