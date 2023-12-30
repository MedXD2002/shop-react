import React from "react";
import { products } from "../data/ProductList";
import OneProduct from "./OneProduct";
import '../styles/Products.css'

const Products = () => {
  return (
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
            {products.map((prod) => (<OneProduct image={prod.thumbnail} title={prod.title} link={prod.link}/>))}
        </div>
      </div>
    </section>
  );
};

export default Products;
