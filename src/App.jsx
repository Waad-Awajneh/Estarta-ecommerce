import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import store from "./redux/store";
const LoginPage = lazy(() => import("./pages/Login/Login"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Home = lazy(() => import("./pages/Home/Home"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Products = lazy(() => import("./pages/Products/Products"));

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
