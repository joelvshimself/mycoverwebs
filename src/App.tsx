import "./App.css";
import { BentoGridSecondDemo } from "./components/bentocomponent";
import Carousel from "./components/slider";
import Comision from "./components/comision";
import Contact from "./components/contactsection";
import { Footer } from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import AnimatedText from "./components/funcionalidades";
import { GlowingEffectDemoSecond } from "./components/glowcard";
import Navbar from "./components/navbar";

import TermsConditions from "./components/terms"; // Importamos la nueva página



function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Navbar /> {/* El Navbar se mantiene en todas las páginas */}

        <Routes>
          {/* Página Principal */}
          <Route
            path="/"
            element={
              <>
                <section>
                  <Hero />
                </section>
                <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
                  <Carousel />
                </section>
                <section className="full-section mb-50 ">
                <AnimatedText
                  text={[
                    "Como funciona ¡Es tan fácil como 1, 2, 3! \n",
                    { icon: "search", label: "Busca" }, " tu evento en la app.\n",
                    { icon: "lock", label: "Compra" }, " tu entrada de forma segura.\n",
                    { icon: "upload", label: "Accede" }, " mostrando tu QR único desde ",
                    { icon: "wallet", label: "Wallet" }
                  ]}
                />




                </section>
                <section className="hidden md:flex min-h-screen w-full bg-black flex-col items-center justify-center text-white text-4xl font-bold pb-20">
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
              </>
            }
          />

          {/* Página de Términos y Condiciones */}
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

