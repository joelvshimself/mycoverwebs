import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./funcionalidades.module.css"; // ✅ Importación correcta para CSS Modules

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Usamos una clase sin CSS Modules para que GSAP la reconozca
    const words = textRef.current.querySelectorAll(".animated-word");

    gsap.fromTo(
      words,
      { color: "rgba(255, 255, 255, 0.2)", opacity: 0.2 },
      {
        color: "white",
        opacity: 1,
        stagger: 0.1, // Cada palabra se ilumina progresivamente
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current, // 🔥 Ahora usamos el ref directamente
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <section className={`${styles.about} about`} ref={textRef}>
      <div className={`${styles.textContainer} text-container`}>
        {text.split(" ").map((word, index) => (
          <span 
            key={index} 
            className={`animated-word ${styles.animatedWord} ${word.toLowerCase() === "donde" ? styles.blueWord : ""}`}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AnimatedText;