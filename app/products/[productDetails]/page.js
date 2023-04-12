// app/products/ProductDetailsPage.js
"use client";
import Image from "next/image";
import styles from "./productDetails.css";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

async function fetchDetailsPage(productDetails) {
  //   console.log(productDetails);
  try {
    const response = await fetch(
      `http://localhost:3000/api/single-product?name=${productDetails}`
    );
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}

function ProductDetailsPage({ params }) {
  const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    quantities,
  } = useContext(CartContext);
  //console.log(quantities);

  const productDetails = params?.productDetails;

  //detailspage is an object with all the properties of a single clicked page
  const [detailspage, setDetailsPage] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const [data] = await fetchDetailsPage(productDetails); // Destructure the array to get the first element
      setDetailsPage(data);
    }

    fetchData();
  }, [productDetails]);

  if (!detailspage) {
    return <div>Loading...</div>;
  }

  const colorsArray = Array.isArray(detailspage.color)
    ? detailspage.color
    : typeof detailspage.color === "string"
    ? detailspage.color.split(", ")
    : [];

  return (
    <div className="main productDetailsPage mx-auto w-11/12 md:w-10/12 lg:w-9/12 flex items-start">
      <Image
        src={detailspage.image}
        alt={detailspage.name}
        width={550}
        height={550}
      />
      <div className="productInfo">
        <h1 className="productName">{detailspage.name}</h1>
        <span className="productPrice">
          <strong color="clr-red-light">{detailspage.price}</strong>
        </span>
        <p className="productDescription mb-8">{detailspage.description}</p>

        <div className="infoItems">
          <span className="productCategory">
            <strong>Category</strong>: {detailspage.category}
          </span>
          <span className="productCost">
            <strong>Shipping Cost:</strong> {detailspage.shippingCost}
          </span>
          <span className="productCompany">
            <strong>Company:</strong> {detailspage.company}
          </span>
        </div>

        <div className="colorsBlock">
          <strong>Color:</strong>{" "}
          {colorsArray.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: "20px",
                height: "20px",
                display: "inline-block",
                marginRight: "5px",
                borderRadius: "50%",
              }}
            />
          ))}
        </div>

        <div className="addToCartBlock flex flex-col">
          <div className="counter flex flex-wrap">
            <span
              className="minus"
              onClick={() => decrementQuantity(detailspage._id)}
            >
              -
            </span>
            <span className="cartValue">
              {quantities[detailspage._id] || 1}
            </span>
            <span
              className="minus"
              onClick={() => incrementQuantity(detailspage._id)}
            >
              +
            </span>
          </div>
          <button
            className="btn btn-primary"
            onClick={() =>
              addToCart(
                {
                  name: detailspage.name,
                  image: detailspage.image,
                  color: colorsArray[0],
                  price: detailspage.price,
                  shippingCost: detailspage.shippingCost, // Add shippingCost property here
                },
                quantities[detailspage._id] || 1,
                detailspage._id
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
