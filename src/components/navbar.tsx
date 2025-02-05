import React from "react";
import { IconDots } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/10 backdrop-blur-lg shadow-lg">
      {/* Logo (Imagen) */}
      
      <div className="text-xl font-bold text-white">my Cover</div>

      {/* Tres Puntos (Menú) */}
      <IconDots size={32} className="text-white cursor-pointer" />
    </nav>
  );
};

export default Navbar;
