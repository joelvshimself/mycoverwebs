import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./comision.module.css";
const boletosImg = "/boletos.svg";
const Comision = () => {
    return (_jsxs("section", { className: styles.comisionContainer, children: [_jsx("h1", { className: styles.title, children: "5% de Comisi\u00F3n" }), _jsx("img", { src: boletosImg, alt: "Boletos con 5% resaltado", className: styles.boletosImage }), _jsx("p", { className: styles.message, children: "\u201CEsta comisi\u00F3n nos ayuda a mantener y mejorar el servicio para ti.\u201D" })] }));
};
export default Comision;
