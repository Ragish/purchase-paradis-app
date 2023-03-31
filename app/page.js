import Head from "next/head";
import LatestProducts from "./latestProducts/LatestProducts";
import clientPromise from "@/lib/mongodb";
import Banner from "./banner/Banner";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>My Website</title>
        <meta name="description" content="My new website using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5/6en8XCp+HHAAK5GSLf2xlYtvJ8U2Q4U+9cuEnJoa3"
          crossorigin="anonymous"
        />
      </Head>
      <main>
        <Banner />
        <LatestProducts />
      </main>
    </>
  );
}
