import { useState } from "react";
import { IconFileText, IconMenu, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./navbar.module.css"; // Importar el CSS separado

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo con enlace al Home */}
      <Link to="/" className="logo">
        my Cover
      </Link>

      {/* Botón de menú hamburguesa en móviles */}
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <IconX size={32} /> : <IconMenu size={32} />}
      </div>

      {/* Menú de navegación */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/terms" className="menu-item" onClick={() => setIsMenuOpen(false)}>
          <IconFileText size={20} className="icon" />
          Términos y Condiciones
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
