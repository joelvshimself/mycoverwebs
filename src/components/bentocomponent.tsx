import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import { IconTicket } from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={<span className="text-3xl font-bold">{item.title}</span>}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Compra de entradas fácil y segura.",
    description: "",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <img src="/bento/lt.png" alt="Compra de entradas" className="w-full h-full object-cover" />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconTicket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Almacenamiento directo en Apple Wallet",
    description: "",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <img src="/bento/wallet.png" alt="Apple Wallet" className="w-full h-full object-cover" />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconTicket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Códigos QR y seriales únicos para entradas",
    description: "",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <img src="/bento/3.png" alt="Códigos QR" className="w-full h-full object-cover" />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconTicket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Distribución rápida, incluso en grandes volúmenes.",
    description: "",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <img src="/bento/2.png" alt="Distribución rápida" className="w-full h-full object-cover" />
      </div>
    ),
    className: "md:col-span-2",
    icon: <IconTicket className="h-4 w-4 text-neutral-500" />,
  },
];
