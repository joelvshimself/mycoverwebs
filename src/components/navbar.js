import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { IconDots, IconFileText } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (_jsxs("nav", { className: "fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-lg shadow-lg z-50", children: [_jsx(Link, { to: "/", className: "text-xl font-bold text-white hover:text-gray-400 transition", children: "my Cover" }), _jsxs("div", { className: "relative", children: [_jsx(IconDots, { size: 32, className: "text-white cursor-pointer", onClick: () => setIsMenuOpen(!isMenuOpen) }), isMenuOpen && (_jsx("div", { className: "absolute right-0 mt-2 w-48 bg-black/60 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg", children: _jsxs(Link, { to: "/terms", className: "flex items-center px-4 py-2 text-white hover:bg-gray-800 transition", onClick: () => setIsMenuOpen(false), children: [_jsx(IconFileText, { size: 20, className: "mr-2" }), "T\u00E9rminos y Condiciones"] }) }))] })] }));
};
export default Navbar;
