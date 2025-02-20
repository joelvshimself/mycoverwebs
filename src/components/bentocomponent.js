import { jsx as _jsx } from "react/jsx-runtime";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { IconTicket } from "@tabler/icons-react";
export function BentoGridSecondDemo() {
    return (_jsx(BentoGrid, { className: "max-w-4xl mx-auto md:auto-rows-[20rem]", children: items.map((item, i) => (_jsx(BentoGridItem, { title: _jsx("span", { className: "text-3xl font-bold", children: item.title }), description: item.description, header: item.header, className: item.className, icon: item.icon }, i))) }));
}
const items = [
    {
        title: "Compra de entradas fácil y segura.",
        description: "",
        header: (_jsx("div", { className: "flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden", children: _jsx("img", { src: "/bento/lt.png", alt: "Compra de entradas", className: "w-full h-full object-cover" }) })),
        className: "md:col-span-2",
        icon: _jsx(IconTicket, { className: "h-4 w-4 text-neutral-500" }),
    },
    {
        title: "Almacenamiento directo en Apple Wallet",
        description: "",
        header: (_jsx("div", { className: "flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden", children: _jsx("img", { src: "/bento/wallet.png", alt: "Apple Wallet", className: "w-full h-full object-cover" }) })),
        className: "md:col-span-1",
        icon: _jsx(IconTicket, { className: "h-4 w-4 text-neutral-500" }),
    },
    {
        title: "Códigos QR y seriales únicos para entradas",
        description: "",
        header: (_jsx("div", { className: "flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden", children: _jsx("img", { src: "/bento/3.png", alt: "C\u00F3digos QR", className: "w-full h-full object-cover" }) })),
        className: "md:col-span-1",
        icon: _jsx(IconTicket, { className: "h-4 w-4 text-neutral-500" }),
    },
    {
        title: "Distribución rápida, incluso en grandes volúmenes.",
        description: "",
        header: (_jsx("div", { className: "flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden", children: _jsx("img", { src: "/bento/2.png", alt: "Distribuci\u00F3n r\u00E1pida", className: "w-full h-full object-cover" }) })),
        className: "md:col-span-2",
        icon: _jsx(IconTicket, { className: "h-4 w-4 text-neutral-500" }),
    },
];
