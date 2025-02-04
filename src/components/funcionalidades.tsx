import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./funcionalidades.module.css";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

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
          trigger: ".about",
          start: "top 80%",
          end: "+=100%",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
      <div className="cool-split" ref={textRef}>
        {text.split(" ").map((word, index) => (
          <span key={index} className={`animated-word word-${index}`}>
            {word}{" "}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AnimatedText;