// src/components/ProductList.jsx
import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/productList.css";

const ProductList = () => {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
