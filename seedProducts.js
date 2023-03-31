import { clientPromise } from "./lib/mongodb.js";

const products = [
  {
    name: "Modern Bookshelf",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/2GpPoQKF_o.jpeg",
    price: "$319.99",
    company: "Caressa",
    color: ["yellow", "red", "green"],
    category: "office",
    shippingCost: "$10",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "High-Back Bench",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/2jm4sPHs_o.jpeg",
    price: "$399.99",
    company: "Ikea",
    color: ["black", "green"],
    category: "office",
    shippingCost: "$15",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Armchair",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/4iSgp3eg_o.jpeg",
    price: "$125.99",
    company: "Marcos",
    color: ["black", "green", "purple"],
    category: "home",
    shippingCost: "$10",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Utopia Sofa",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/4LiiRiY9_o.jpeg",
    price: "$799.99",
    company: "Liddy",
    color: ["red", "green"],
    category: "home",
    shippingCost: "$20",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Wooden Desk",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/5OTgCNyH_o.jpeg",
    price: "$1,509.99",
    company: "Ikea",
    color: "black",
    category: "office",
    shippingCost: "$30",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Leather Sofa",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/5V5iZwX4_o.jpeg",
    price: "$999.99",
    company: "Caressa",
    color: ["green", "purple"],
    category: "office",
    shippingCost: "$50",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Wooden Bed",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/A0a3lGvb_o.jpeg",
    price: "$2,500.99",
    company: "Ikea",
    color: "yellow",
    category: "home",
    shippingCost: "$60",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Wooden Desk",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/Ce0d8fue_o.jpeg",
    price: "$400.99",
    company: "Ikea",
    color: ["blue", "green"],
    category: "office",
    shippingCost: "$15",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Entertainment Center",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/cQ29pV1x_o.jpeg",
    price: "$599.990",
    company: "Caressa",
    color: ["black", "green"],
    category: "home",
    shippingCost: "$25",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Accent Chair",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/iuYyO9RP_o.jpeg",
    price: "$259.99",
    company: "sa",
    color: ["red", "green", "purple"],
    category: "office",
    shippingCost: "$15",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Albany Sectional",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/mgSP2SV2_o.jpeg",
    price: "$1,099.99",
    company: "Liddy",
    color: ["black", "red"],
    category: "office",
    shippingCost: "$19",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  {
    name: "Leather Chair",
    image:
      "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/Pqoxb7z6_o.jpeg",
    price: "$200.99",
    company: "Liddy",
    color: "red",
    category: "office",
    shippingCost: "$29",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },

  //   {
  //     name: "saddasasd",
  //     image:
  //       "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/q0XmH4ZV_o.jpeg",
  //     price: "100",
  //     company: "sa",
  //     color: "red",
  //     category: "office",
  //     shippingCost: "$10",
  //     description: "hfkjdhsfdkfdhsf",
  //   },

  //   {
  //     name: "saddasasd",
  //     image:
  //       "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/S0xjwQ1l_o.jpeg",
  //     price: "100",
  //     company: "sa",
  //     color: "red",
  //     category: "office",
  //     shippingCost: "$10",
  //     description: "hfkjdhsfdkfdhsf",
  //   },

  //   {
  //     name: "saddasasd",
  //     image:
  //       "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/TJCBoMAa_o.jpeg",
  //     price: "100",
  //     company: "sa",
  //     color: "red",
  //     category: "office",
  //     shippingCost: "$10",
  //     description: "hfkjdhsfdkfdhsf",
  //   },

  //   {
  //     name: "saddasasd",
  //     image:
  //       "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/ui4jmenR_o.jpeg",
  //     price: "100",
  //     company: "sa",
  //     color: "red",
  //     category: "office",
  //     shippingCost: "$10",
  //     description: "hfkjdhsfdkfdhsf",
  //   },

  //   {
  //     name: "saddasasd",
  //     image:
  //       "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/XwC9OolK_o.jpeg",
  //     price: "100",
  //     company: "sa",
  //     color: "red",
  //     category: "office",
  //     shippingCost: "$10",
  //     description: "hfkjdhsfdkfdhsf",
  //   },

  //   {
  //     name: "saddasasd",
  //     image:
  //       "ashttps://s3.ap-southeast-2.amazonaws.com/purchase.paradise/yeVuPMaL_o.jpegas",
  //     price: "100",
  //     company: "sa",
  //     color: "red",
  //     category: "office",
  //     shippingCost: "$10",
  //     description: "hfkjdhsfdkfdhsf",
  //   },

  //   {
  //     name: "saddasasd",
  //     image:
  //       "https://s3.ap-southeast-2.amazonaws.com/purchase.paradise/z0zPcZg3_o.jpeg",
  //     price: "100",
  //     company: "sa",
  //     color: "red",
  //     category: "office",
  //     shippingCost: "$10",
  //     description: "hfkjdhsfdkfdhsf",
  //   },
];

(async () => {
  const client = await clientPromise;
  const db = client.db();
  await db.collection("products").insertMany(products);
  console.log("Products inserted successfully");
  client.close();
})();
