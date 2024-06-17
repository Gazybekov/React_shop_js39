import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import PagintaionContolled from "./Pagintaion";

const ProductList = () => {
  const { getProducts, products } = useProduct();
  // текущая страница
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  // кол-во продуктов на одной странице
  const itemPerPage = 4;
  // общее кол-во страниц
  const count = Math.ceil(products.length / itemPerPage);
  console.log(products);
  const currentData = () => {
    const beginIndex = (page - 1) * itemPerPage;
    const endIndex = beginIndex + itemPerPage;
    return products.slice(beginIndex, endIndex);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {currentData().map((elem) => (
          <ProductCard key={elem.id} {...elem} />
        ))}
      </Box>
      <PagintaionContolled
        page={page}
        count={count}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ProductList;
