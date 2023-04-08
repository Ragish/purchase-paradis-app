"use client";

import React, { useContext } from "react";
import cartPage from "./cartPage.css";
import globals from "../globals.css";
import Image from "next/image";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function CartPage() {
  const {
    cart,
    quantities,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);

  function parsePrice(priceStr) {
    const numberStr = priceStr.replace("$", "").replace(",", "");
    return parseFloat(numberStr);
  }

  return (
    <div className="cartPage mx-auto w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-start">
      <div className="cartPageRow title">
        <div className="cartPageColumn">Item</div>
        <div className="cartPageColumn">Price</div>
        <div className="cartPageColumn">Quantity</div>
        <div className="cartPageColumn">Sub Total</div>
      </div>
      {cart.map((item, index) => (
        <div class="cartPageRow" key={index}>
          <div class="cartPageColumn">
            <Image
              src={item.image}
              className="productThumbnail"
              alt={item.name}
              width={100}
              height={75}
            />
            <span className="productName pt-5">
              {item.name}
              {item.color}
            </span>
          </div>
          <div className="cartPageColumn">{item.price}</div>
          <div className="cartPageColumn">
            <div className="counter flex flex-wrap">
              <span
                className="minus"
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </span>
              <span className="cartValue">{quantities[item.id]}</span>
              <span
                className="minus"
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </span>
            </div>
          </div>
          <div className="cartPageColumn">
            ${(parsePrice(item.price) * quantities[item.id]).toFixed(2)}
          </div>
          <button
            className="deleteCart"
            onClick={() => removeFromCart(item.id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
