import "./App.css";
import { BentoGridSecondDemo } from "./components/bentocomponent";
import Carousel from "./components/carousel";
import Comision from "./components/comision";
import Contact from "./components/contactsection";
import { Footer } from "./components/footer";
import AnimatedText from "./components/funcionalidades";
import { GlowingEffectDemoSecond } from "./components/glowcard";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Slider from "./components/slider";


function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section >
        <Hero />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        <Carousel />
      </section>
      <Slider />
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
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
