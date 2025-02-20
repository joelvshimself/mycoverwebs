import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import { BentoGridSecondDemo } from "./components/bentocomponent";
import Carousel from "./components/slider";
import Comision from "./components/comision";
import Contact from "./components/contactsection";
import { Footer } from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import AnimatedText from "./components/funcionalidades";
import { GlowingEffectDemoSecond } from "./components/glowcard";
import Navbar from "./components/navbar";
import TermsConditions from "./components/terms"; // Importamos la nueva página
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "flex flex-col", children: [_jsx(Navbar, {}), " ", _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx("section", { children: _jsx(Hero, {}) }), _jsx("section", { className: "h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold", children: _jsx(Carousel, {}) }), _jsxs("section", { className: "full-section", children: [_jsx(AnimatedText, { text: `Como funciona ¡Es tan fácil como 1, 2, 3! \n
􀊫 Busca tu evento en la app .\n 􀎠 Compra tu entrada de forma segura .\n 􀆡Accede mostrando tu QR único desde 􂏰` }), _jsx("br", {})] }), _jsx("section", { className: "h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold", children: _jsx(BentoGridSecondDemo, {}) }), _jsx("section", { className: "h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold", children: _jsx(Comision, {}) }), _jsx("section", { className: "h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold", children: _jsx(GlowingEffectDemoSecond, {}) }), _jsx("section", { className: "h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold", children: _jsx(Contact, {}) }), _jsx("footer", { children: _jsx(Footer, {}) })] }) }), _jsx(Route, { path: "/terms", element: _jsx(TermsConditions, {}) })] })] }) }));
}
export default App;
