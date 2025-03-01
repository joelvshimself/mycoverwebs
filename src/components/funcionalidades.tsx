import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Search, Lock, Upload, Wallet } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type IconType = "search" | "lock" | "upload" | "wallet";

const iconMap: Record<IconType, React.ElementType> = {
  search: Search,
  lock: Lock,
  upload: Upload,
  wallet: Wallet,
};

interface AnimatedTextProps {
  text: (string | { icon: IconType; label: string })[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[80vh] text-center">
      <p
        className="text-white text-5xl font-bold leading-snug w-[80%]"
        ref={textRef}
      >
        {text.map((item, index) => {
          if (typeof item === "string") {
            return item.split("\n").map((line, i) => (
              <React.Fragment key={`${index}-${i}`}>
                {i > 0 && <br />}
                <span>{line}</span>
              </React.Fragment>
            ));
          }

          const IconComponent = iconMap[item.icon];
          return (
            <span
              key={index}
              className="inline-flex items-center gap-3 mx-1"
            >
              <IconComponent size={40} style={{ color: "rgb(120, 96, 246)" }} />
              <strong>{item.label}</strong>
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default AnimatedText;
