//app/Header/Header.js
"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const { cart, cartItemCount } = useContext(CartContext);

  return (
    <header className="header py-4 shadow-md">
      <nav className="nav-center mx-auto w-11/12 md:w-10/12 lg:w-9/12 flex items-center justify-between">
        <div className="nav-header flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={104}
              className="cursor-pointer"
            />
          </Link>
          <button className="md:hidden text-gray-800">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links hidden md:flex items-center justify-center gap-4 text-gray-700">
          <li>
            <Link
              href="/"
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Products
            </Link>
          </li>
        </ul>
        <div className="secondary-navigation flex items-center gap-6 text-gray-800">
          <Link
            href="/cart"
            className="cart-btn flex items-center cursor-pointer"
          >
            Cart
            <span className="cart-container ml-2">
              <span className="cart-value">{cartItemCount}</span>
            </span>
          </Link>
          <button type="button" className="auth-btn">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
