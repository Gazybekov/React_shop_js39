import React, { createContext, useContext, useReducer } from "react";
import { getLocalStorage } from "../helpers/functions";
export const cartContext = createContext();
export const useCart = () => useContext(cartContext);
const CartContextProvider = ({ children }) => {
  const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")),
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_CART":
        return { ...state, cart: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! CREATE
  // функция для добавления товара в корзину
  const addProductToCart = (product) => {
    // получаем содержимое из хранилища
    let cart = getLocalStorage();
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    // создаем обьект, который добавим в localStorage в массив cart.products
    let newProduct = {
      item: product,
      count: 1,
      subPrice: 0,
    };
    // проверяем есть ли уже продукт, который хотим добавить в корзину
    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    // если товар уже добавлен в корзину, то удаляем его из массива cart.products через filter, в противном случае добавляем его в cart.products
    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    // обновляем данные в localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    // обновляем состояние
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };
  //! GET
  // функция для получения продуктов добавленных в корзину из хранилища
  const getCart = () => {
    // получаем данные из localStorage
    let cart = getLocalStorage();
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
      // обновляем состояние
      dispatch({
        type: "GET_CART",
        payload: cart,
      });
    }
  };
  const values = {
    addProductToCart,
    cart: state.cart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
