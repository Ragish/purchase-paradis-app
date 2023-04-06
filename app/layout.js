import "../styles/globals.css";
import "./header/header.css";
import "./banner/banner.css";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
