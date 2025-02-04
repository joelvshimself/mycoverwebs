import {BentoGridSecondDemo} from "./components/bentocomponent";
import "./App.css"; 
import Hero from "./components/hero";
import AnimatedText from "./components/funcionalidades";
import Comision from "./components/comision";
import { GlowingEffectDemoSecond } from "./components/glowcard";


function App() {
  return (
    <div className="flex flex-col">
      <section >
        <Hero />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        Section 2
      </section>
      <section className="full-section">
      <AnimatedText 
  text={`Como funciona ¡Es tan fácil como 1, 2, 3! \n
􀊫 Busca tu evento en la app .\n 􀎠 Compra tu entrada de forma segura .\n 􀆡Accede mostrando tu QR único desde 􂏰`} 
/>
      <br />
      
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">

        <BentoGridSecondDemo />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        <Comision />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        <GlowingEffectDemoSecond />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        Section 7
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        Section 8
      </section>
    </div>
  );
}

export default App;