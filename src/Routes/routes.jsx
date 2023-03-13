import React from "react";

import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
const LoginPage = lazy(() => import("../pages/Login/Login"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const Products = lazy(() => import("../pages/Products/Products"));
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
      <Route
        path="/products"
        element={<ProtectedRoute element={<Products />} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
