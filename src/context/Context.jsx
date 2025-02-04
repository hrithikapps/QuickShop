import { faker } from "@faker-js/faker";
import React, { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./Reducers";

const Cart = createContext();

faker.seed(99);
const Context = ({ children }) => {
  const allProducts = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr(),
    inStock: faker.helpers.arrayElement([5, 2, 3, 0, 6]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  console.log(allProducts);

  const [state, dispatch] = useReducer(CartReducer, {
    products: allProducts,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const cartState = () => {
  return useContext(Cart);
};
