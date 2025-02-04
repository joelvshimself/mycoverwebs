import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./funcionalidades.module.css"; // Importamos los estilos

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "words,chars" }); 

    gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        end: "+=100%",
        scrub: 1.5,
      },
    }).set(
      split.chars,
      { color: "white", stagger: 0.1 },
      0.1
    );

    return () => {
      split.revert(); // Limpia los estilos cuando el componente se desmonta
    };
  }, []);

  return (
    <section className="about h-screen bg-black w-full flex items-center justify-center text-4xl font-bold">
      <div className="cool-split">
        <h2 ref={textRef}>{text}</h2>
      </div>
    </section>
  );
};

export default AnimatedText;