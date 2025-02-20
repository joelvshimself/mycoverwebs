"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconPencilMinus, IconGrain } from "@tabler/icons-react";
import { GlowingEffect } from "./ui/glowing-effect";
export function GlowingEffectDemoSecond() {
    return (_jsxs("div", { className: "relative mx-auto max-w-4xl rounded-3xl border border-gray-900 p-6 bg-black", children: [_jsx("h2", { className: "text-center text-2xl font-bold text-white mb-6", children: "Nosotros" }), _jsxs("ul", { className: "grid grid-cols-2 gap-4", children: [_jsx(GridItem, { icon: _jsx(IconPencilMinus, { className: "h-6 w-6 text-white" }), title: "Elviro Dominguez Soriano", description: "Dise\u00F1ador y creador de experiencias digitales." }), _jsx(GridItem, { icon: _jsx(IconGrain, { className: "h-6 w-6 text-white" }), title: "Joel Vargas Reynoso", description: "Especialista en tecnolog\u00EDa y dise\u00F1o de interfaces." })] })] }));
}
const GridItem = ({ icon, title, description }) => {
    return (_jsx("li", { className: "min-h-[14rem] list-none", children: _jsxs("div", { className: "relative h-full rounded-2.5xl border border-gray-700 p-2 md:rounded-3xl md:p-3", children: [_jsx(GlowingEffect, { blur: 0, borderWidth: 2, spread: 60, glow: true, disabled: false, proximity: 64, inactiveZone: 0.01 }), _jsx("div", { className: "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6", children: _jsxs("div", { className: "relative flex flex-1 flex-col justify-between gap-3", children: [_jsx("div", { className: "w-fit rounded-lg border border-gray-600 p-2", children: icon }), _jsxs("div", { className: "space-y-3", children: [_jsx("h3", { className: "pt-0.5 text-2xl font-semibold font-sans text-white", children: title }), _jsx("h2", { className: "font-sans text-base text-gray-400", children: description })] })] }) })] }) }));
};
