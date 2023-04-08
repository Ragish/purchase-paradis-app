import React from "react";
import footer from "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-lg font-semibold mb-4 md:mb-0">
            Purchase Paradise
          </div>
          <div className="mb-4 md:mb-0">
            <span>© {currentYear} Purchase Paradise.</span>
            <span className="ml-4">All rights reserved.</span>
          </div>
          <div className="flex space-x-4">
            {/* Replace the '#' with your social media profile links */}
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
