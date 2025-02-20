import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MagicCard } from "./ui/MagicCard";
export function MagicCardDemo() {
    return (_jsxs("div", { className: "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row", children: [_jsx(MagicCard, { className: "cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl", gradientFrom: "#FF5733" // 🔥 Rojo-Naranja
                , gradientTo: "#FFD700" // 🔥 Amarillo
                , children: "Magic" }), _jsx(MagicCard, { className: "cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl", gradientFrom: "#8A2BE2" // 🔥 Azul-Morado
                , gradientTo: "#00FFFF" // 🔥 Cian
                , children: "Card" })] }));
}
