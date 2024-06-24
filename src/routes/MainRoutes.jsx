import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import ContactsPage from "../pages/ContactsPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/edit/:id", element: <EditProduct /> },
    { id: 4, link: "/about", element: <AboutPage /> },
    { id: 5, link: "/contacts", element: <ContactsPage /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
    { id: 7, link: "/cart", element: <CartPage /> },
    { id: 8, link: "/auth", element: <AuthPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
