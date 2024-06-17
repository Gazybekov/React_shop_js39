import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductList from "../components/products/ProductList";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import ContactsPage from "../pages/ContactsPage";
import AdminPage from "../pages/AdminPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductList /> },
    { id: 3, link: "/edit/:id", element: <EditProduct /> },
    { id: 4, link: "/about", element: <AboutPage /> },
    { id: 5, link: "/contacts", element: <ContactsPage /> },
    { id: 6, link: "/admin", element: <AdminPage /> },
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