import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API_CATEGORY } from "../helpers/const";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
};
const ProductContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      case "GET_CATEGORIS":
        return { ...state, categories: action.payload };
    }
  };
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! create
  const createProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };
  //! get
  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  //! getOneProduct
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };
  //! edit
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };
  //! createCategory
  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORY, newCategory);
    navigate("/products");
  };
  //! getCategories
  const getCategories = async () => {
    const { data } = await axios(API_CATEGORY);
    dispatch({
      type: "GET_CATEGORIS",
      payload: data,
    });
  };
  //! filter
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };
  const values = {
    createProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    createCategory,
    getCategories,
    categories: state.categories,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
