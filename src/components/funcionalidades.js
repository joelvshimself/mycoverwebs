import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./funcionalidades.module.css"; // ✅ Importación correcta para CSS Modules
gsap.registerPlugin(ScrollTrigger);
const AnimatedText = ({ text }) => {
    const textRef = useRef(null);
    useEffect(() => {
        if (!textRef.current)
            return;
        // Usamos una clase sin CSS Modules para que GSAP la reconozca
        const words = textRef.current.querySelectorAll(".animated-word");
        gsap.fromTo(words, { color: "rgba(255, 255, 255, 0.2)", opacity: 0.2 }, {
            color: "white",
            opacity: 1,
            stagger: 0.1, // Cada palabra se ilumina progresivamente
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: textRef.current, // 🔥 Ahora usamos el ref directamente
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1.5,
            },
        });
    }, []);
    return (_jsx("section", { className: `${styles.about} about`, ref: textRef, children: _jsx("div", { className: `${styles.textContainer} text-container`, children: text.split(" ").map((word, index) => (_jsxs("span", { className: `animated-word ${styles.animatedWord} ${word.toLowerCase() === "donde" ? styles.blueWord : ""}`, children: [word, " "] }, index))) }) }));
};
export default AnimatedText;
