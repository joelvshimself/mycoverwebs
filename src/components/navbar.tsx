import React, { useState } from "react";
import { IconDots, IconFileText } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-lg shadow-lg z-50">
      {/* Logo con enlace al Home */}
      <Link to="/" className="text-xl font-bold text-white hover:text-gray-400 transition">
        my Cover
      </Link>

      {/* Menú de los tres puntos */}
      <div className="relative">
        <IconDots 
          size={32} 
          className="text-white cursor-pointer" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black/60 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
            <Link 
              to="/terms" 
              className="flex items-center px-4 py-2 text-white hover:bg-gray-800 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <IconFileText size={20} className="mr-2" />
              Términos y Condiciones
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
