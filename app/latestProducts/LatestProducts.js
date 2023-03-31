import Link from "next/link";
import { use } from "react";

//Fetching data using getStaticProps in Next.js 13
async function getProductsData() {
  return await (await fetch("http://localhost:3000/api/all-products")).json();
}

export default function LatestProducts() {
  const productData = use(getProductsData());

  return (
    <div className="section-center featured-products">
      <h2 className="text-2xl font-semibold mb-6">Latest Products</h2>
      <div className="flex flex-wrap -mx-2">
        {productData.length > 0 ? (
          productData.slice(0, 4).map((product) => (
            <div
              key={product._id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
            >
              <div className="bg-white shadow rounded-md p-4 h-full flex flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover object-center mb-4 rounded"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
