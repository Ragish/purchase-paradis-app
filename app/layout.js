"use client";

import "./globals.css";
import "./header/header.css";
import "./banner/banner.css";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import { CartProvider } from "./contexts/CartContext";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
