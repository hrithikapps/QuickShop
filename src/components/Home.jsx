import React from "react";
import { cartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
  } = cartState();
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
