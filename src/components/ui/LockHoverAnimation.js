import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Lock, Unlock } from "lucide-react";
import { useState } from "react";
export function LockHoverAnimation() {
    const [hovered, setHovered] = useState(false);
    return (_jsxs(motion.div, { className: "relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800", onHoverStart: () => setHovered(true), onHoverEnd: () => setHovered(false), children: [_jsx(motion.div, { initial: { opacity: 1, rotate: 0 }, animate: { opacity: hovered ? 0 : 1, rotate: hovered ? -30 : 0 }, transition: { duration: 0.3 }, className: "absolute", children: _jsx(Unlock, { size: 32, className: "text-gray-600 dark:text-gray-300" }) }), _jsx(motion.div, { initial: { opacity: 0, rotate: 30 }, animate: { opacity: hovered ? 1 : 0, rotate: hovered ? 0 : 30 }, transition: { duration: 0.3 }, className: "absolute", children: _jsx(Lock, { size: 32, className: "text-gray-600 dark:text-gray-300" }) })] }));
}
