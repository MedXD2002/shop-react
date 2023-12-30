import React from "react";
import { case1 } from "./data/data";
import OneProduct from "./OneProduct";

const Case = () => {
  const saveToLocalStorage = (key, data) => {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
    } catch (error) {
      console.error("Error saving to local storage:", error);
    }
  };

  const handleAddToCart = (image, title, price) => {
    const newCartItem = { image, title, price, quantity: 1 };

    // Retrieve existing items from local storage
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = existingItems.findIndex(item => item.title === title);

    if (existingItemIndex !== -1) {
      // Item already exists, update the quantity
      existingItems[existingItemIndex].quantity += 1;
    } else {
      // Item is new, add it to the cart
      existingItems.push(newCartItem);
    }

    // Save the updated array back to local storage
    saveToLocalStorage("cartItems", existingItems);
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
          {case1.map((prod) => (
            <OneProduct
              key={prod.id}
              image={prod.thumbnail}
              title={prod.title}
              price={prod.price}
              onAddToCart={() => handleAddToCart(prod.thumbnail, prod.title, prod.price)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Case;
