"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
export function MagicCard({ children, className, gradientSize = 200, gradientColor = "#262626", gradientOpacity = 1, gradientFrom = "#9E7AFF", gradientTo = "#FE8BBB", }) {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(-gradientSize);
    const mouseY = useMotionValue(-gradientSize);
    const handleMouseMove = useCallback((e) => {
        if (cardRef.current) {
            const { left, top } = cardRef.current.getBoundingClientRect();
            const clientX = e.clientX;
            const clientY = e.clientY;
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }
    }, [mouseX, mouseY]);
    const handleMouseOut = useCallback((e) => {
        if (!e.relatedTarget) {
            document.removeEventListener("mousemove", handleMouseMove);
            mouseX.set(-gradientSize);
            mouseY.set(-gradientSize);
        }
    }, [handleMouseMove, mouseX, gradientSize, mouseY]);
    const handleMouseEnter = useCallback(() => {
        document.addEventListener("mousemove", handleMouseMove);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
    }, [handleMouseMove, mouseX, gradientSize, mouseY]);
    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseout", handleMouseOut);
        document.addEventListener("mouseenter", handleMouseEnter);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [handleMouseEnter, handleMouseMove, handleMouseOut]);
    useEffect(() => {
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
    }, [gradientSize, mouseX, mouseY]);
    return (_jsxs("div", { ref: cardRef, className: cn("group relative flex size-full rounded-xl", className), children: [_jsx("div", { className: "absolute inset-px z-10 rounded-xl bg-background" }), _jsx("div", { className: "relative z-30", children: children }), _jsx(motion.div, { className: "pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100", style: {
                    background: useMotionTemplate `
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
                    opacity: gradientOpacity,
                } }), _jsx(motion.div, { className: "pointer-events-none absolute inset-0 rounded-xl bg-border duration-300 group-hover:opacity-100", style: {
                    background: useMotionTemplate `
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom}, 
              ${gradientTo}, 
              hsl(var(--border)) 100%
            )
          `,
                } })] }));
}
