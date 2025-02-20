import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from "./hero.module.css";
import TestSheet from "./testsheet";
import { useState } from "react";
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: styles.hero, children: [_jsx("img", { className: styles.logo, src: "./logobrillo.png", alt: "" }), _jsx("h1", { className: styles.title, children: "myCover app" }), _jsx("p", { className: styles.subtitle, children: "Where Party starts." }), _jsx("button", { onClick: () => setIsOpen(true), className: styles.button, children: "aply for a demo" })] }), isOpen && _jsx(TestSheet, { onClose: () => setIsOpen(false) })] }));
};
export default Hero;
