// "use client";

// import React, { useContext } from "react";
// import cartPage from "./cartPage.css";
// import globals from "../globals.css";
// import Image from "next/image";
// import { CartContext } from "../contexts/CartContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// function CartPage() {
//   const {
//     cart,
//     quantities,
//     removeFromCart,
//     incrementQuantity,
//     decrementQuantity,
//     clearShoppingCart,
//   } = useContext(CartContext);

//   function parsePrice(priceStr) {
//     const numberStr = priceStr.replace("$", "").replace(",", "");
//     return parseFloat(numberStr);
//   }
//   function calculateShippingFee() {
//     return cart.reduce(
//       (acc, item) => acc + parsePrice(item.shippingCost) * quantities[item.id],
//       0
//     );
//   }

//   // Calculate subTotal, shippingFee, and orderTotal using cart and quantities
//   const subTotal = cart.reduce(
//     (acc, item) => acc + parsePrice(item.price) * quantities[item.id],
//     0
//   );
//   const shippingFee = calculateShippingFee(); // Replace fixed shipping fee
//   const orderTotal = subTotal + shippingFee;

//   return (
//     <div className="cartPage mx-auto w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-start">
//       <div className="cartPageRow title">
//         <div className="cartPageColumn">Item</div>
//         <div className="cartPageColumn">Price</div>
//         <div className="cartPageColumn">Quantity</div>
//         <div className="cartPageColumn">Sub Total</div>
//       </div>
//       {cart.map((item, index) => (
//         <div class="cartPageRow" key={index}>
//           <div class="cartPageColumn">
//             <Image
//               src={item.image}
//               className="productThumbnail"
//               alt={item.name}
//               width={100}
//               height={75}
//             />
//             <span className="productName pt-5">{item.name}</span>
//           </div>
//           <div className="cartPageColumn">{item.price}</div>
//           <div className="cartPageColumn">
//             <div className="counter flex flex-wrap">
//               <span
//                 className="minus"
//                 onClick={() => decrementQuantity(item.id)}
//               >
//                 -
//               </span>
//               <span className="cartValue">{quantities[item.id]}</span>

//               <span
//                 className="minus"
//                 onClick={() => incrementQuantity(item.id)}
//               >
//                 +
//               </span>
//             </div>
//           </div>
//           <div className="cartPageColumn">${subTotal.toFixed(2)}</div>
//           <button
//             className="deleteCart"
//             onClick={() => removeFromCart(item.id)}
//           >
//             <FontAwesomeIcon icon={faTrashAlt} />
//           </button>
//         </div>
//       ))}

//       <div className="clearCartRow w-full flex">
//         <button
//           className="clearCart btn btn-primary"
//           onClick={clearShoppingCart}
//         >
//           Clear Shopping Cart
//         </button>
//       </div>

//       <div class="cartTotalRow w-full flex">
//         <div class="item">
//           <span class="label">Sub Total:</span>
//           <span class="value">${subTotal.toFixed(2)}</span>
//         </div>
//         <div class="item">
//           <span class="label">Shipping Fee:</span>
//           <span class="value">${shippingFee.toFixed(2)}</span>
//         </div>
//         <div class="item">
//           <span class="label">Order Total:</span>
//           <span class="value">${orderTotal.toFixed(2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

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
    clearShoppingCart,
  } = useContext(CartContext);

  function parsePrice(priceStr) {
    const numberStr = priceStr.replace("$", "").replace(",", "");
    return parseFloat(numberStr);
  }

  function calculateShippingFee() {
    return cart.reduce(
      (acc, item) => acc + parsePrice(item.shippingCost) * quantities[item.id],
      0
    );
  }

  function calculateItemSubtotal(itemPrice, itemId) {
    return parsePrice(itemPrice) * quantities[itemId];
  }

  const subTotal = cart.reduce(
    (acc, item) => acc + calculateItemSubtotal(item.price, item.id),
    0
  );
  const shippingFee = calculateShippingFee();
  const orderTotal = subTotal + shippingFee;

  return (
    <div className="main cartPage mx-auto w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-start">
      <div className="cartPageRow title">
        <div className="cartPageColumn">Item</div>
        <div className="cartPageColumn">Price</div>
        <div className="cartPageColumn">Quantity</div>
        <div className="cartPageColumn">Sub Total</div>
      </div>
      {cart.map((item, index) => {
        const itemSubtotal = calculateItemSubtotal(item.price, item.id);
        return (
          <div class="cartPageRow" key={index}>
            <div class="cartPageColumn">
              <Image
                src={item.image}
                className="productThumbnail"
                alt={item.name}
                width={100}
                height={75}
              />
              <span className="productName pt-5">{item.name}</span>
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
            <div className="cartPageColumn">${itemSubtotal.toFixed(2)}</div>
            <button
              className="deleteCart"
              onClick={() => removeFromCart(item.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        );
      })}

      <div className="clearCartRow w-full flex">
        <button
          className="clearCart btn btn-primary"
          onClick={clearShoppingCart}
        >
          Clear Shopping Cart
        </button>
      </div>

      <div class="cartTotalRow flex">
        <div className="cartValueBox">
          <div class="item">
            <span class="label">Sub Total:</span>
            <span class="value">${subTotal.toFixed(2)}</span>
          </div>
          <div class="item">
            <span class="label">Shipping Fee:</span>
            <span class="value">${shippingFee.toFixed(2)}</span>
          </div>
          <div class="item">
            <span class="label">Order Total:</span>
            <span class="value">${orderTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
