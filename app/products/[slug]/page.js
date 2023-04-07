// app/products/ProductDetailsPage.js
"use client";
import React from "react";

async function fetchDetailsPage(slug) {
  //   console.log(slug);
  try {
    const response = await fetch(
      `http://localhost:3000/api/single-product?name=${slug}`
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
  const slug = params?.slug;
  const [detailspage, setDetailsPage] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const [data] = await fetchDetailsPage(slug); // Destructure the array to get the first element
      setDetailsPage(data);
    }

    fetchData();
  }, [slug]);

  if (!detailspage) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>ProductDetailsPage: {slug}</h1>
      <p>Name: {detailspage.name}</p>
      <p>Price: {detailspage.price}</p>
    </div>
  );
}

export default ProductDetailsPage;
