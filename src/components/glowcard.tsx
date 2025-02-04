"use client";

import { IconPencilMinus, IconGrain } from "@tabler/icons-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <div className="relative mx-auto max-w-4xl rounded-3xl border border-gray-900 p-6 bg-black">
      <h2 className="text-center text-2xl font-bold text-white mb-6">Nosotros</h2>
      <ul className="grid grid-cols-2 gap-4">
        <GridItem
          icon={<IconPencilMinus className="h-6 w-6 text-white" />}
          title="Elviro Dominguez Soriano"
          description="Diseñador y creador de experiencias digitales."
        />

        <GridItem
          icon={<IconGrain className="h-6 w-6 text-white" />}
          title="Joel Vargas Reynoso"
          description="Especialista en tecnología y diseño de interfaces."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-2.5xl border border-gray-700 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-2xl font-semibold font-sans text-white">
                {title}
              </h3>
              <h2 className="font-sans text-base text-gray-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};