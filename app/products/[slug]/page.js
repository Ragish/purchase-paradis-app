// // getStaticProps in Next13
// async function getCharacters() {
//   return await (await fetch("http://localhost:3000/api/single-product")).json();
// }

// // getStaticPaths in Next13
// export async function generateStaticParams() {
//   const characters = await getCharacters();
//   console.log("This is a copnsole log", characters);

//   return characters?.results.map((c) => ({
//     slug: c?.name.replace(/\s+/g, "-").toLowerCase(),
//   }));
// }

// export default function Staticpage({ params }) {
//   return (
//     <>
//       <h1>The character name is: {params.slug}</h1>
//     </>
//   );
// }

import React from "react";

const PageProps = {
  params: {
    slug: "",
  },
};

function ProductDetailsPage({ params: { slug } }) {
  return <div>ProductDetailsPage: {slug}</div>;
}

export default ProductDetailsPage;
