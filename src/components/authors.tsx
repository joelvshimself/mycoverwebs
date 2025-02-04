import { MagicCard } from "./ui/MagicCard";

export function MagicCardDemo() {
  return (
    <div
      className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientFrom="#FF5733" // 🔥 Rojo-Naranja
        gradientTo="#FFD700" // 🔥 Amarillo
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
        gradientFrom="#8A2BE2" // 🔥 Azul-Morado
        gradientTo="#00FFFF" // 🔥 Cian
      >
        Card
      </MagicCard>
    </div>
  );
}