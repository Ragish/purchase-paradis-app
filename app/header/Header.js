// //app/Header/Header.js
// "use client";

// import React, { useContext } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { CartContext } from "../contexts/CartContext";
// import { useSession, signOut } from "next-auth/react";

// const Header = () => {
//   const { cart, cartItemCount } = useContext(CartContext);

//   const { data } = useSession();

//   return (
//     <header className="header py-4 shadow-md">
//       <nav className="nav-center mx-auto w-11/12 md:w-10/12 lg:w-9/12 flex items-center justify-between">
//         <div className="nav-header flex items-center justify-between">
//           <Link href="/">
//             <Image
//               src="/images/logo.png"
//               alt="Logo"
//               width={200}
//               height={104}
//               className="cursor-pointer"
//             />
//           </Link>
//           <button className="md:hidden text-gray-800">
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//         <ul className="nav-links hidden md:flex items-center justify-center gap-4 text-gray-700">
//           <li>
//             <Link
//               href="/"
//               className="hover:text-gray-900 transition-colors cursor-pointer"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/about"
//               className="hover:text-gray-900 transition-colors cursor-pointer"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/products"
//               className="hover:text-gray-900 transition-colors cursor-pointer"
//             >
//               Products
//             </Link>
//           </li>
//         </ul>
//         <div className="secondary-navigation flex items-center gap-6 text-gray-800">
//           <Link
//             href="/cart"
//             className="cart-btn flex items-center cursor-pointer"
//           >
//             Cart
//             <span className="cart-container ml-2">
//               <span className="cart-value">{cartItemCount}</span>
//             </span>
//           </Link>

//           {data?.user ? (
//             <>
//               <h5 className="loggedUser">{data?.user?.name}</h5>
//               {console.log(data?.user?.name)}
//               <span className="auth-btn" onClick={() => signOut()}>
//                 Logout
//               </span>
//             </>
//           ) : (
//             <Link href="/login">
//               <button type="button" className="auth-btn">
//                 Login
//               </button>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

//app/Header/Header.js
"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../contexts/CartContext";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { cart, cartItemCount } = useContext(CartContext);

  const { data: session, status } = useSession();
  //console.log("Session data:", session);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  //console.log("Session object:", session);
  //console.log("Status", status);
  //console.log("User", User);

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

          {status === "authenticated" && session && session.user ? (
            <div>
              <h5 className="loggedUser">{session.user.name}</h5>
              <span className="auth-btn" onClick={() => signOut()}>
                Logout
              </span>
            </div>
          ) : (
            <Link href="/login">
              <button type="button" className="auth-btn">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
