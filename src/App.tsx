import {BentoGridSecondDemo} from "./components/bentocomponent";
import styles from "./App.css";
import Hero from "./components/hero";
import AnimatedText from "./components/funcionalidades";


function App() {
  return (
    <div className="flex flex-col">
      <section >
        <Hero />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        Section 2
      </section>
      <section className="h-screen w-full  flex items-center justify-center text-4xl font-bold">
      <AnimatedText text="Este es un texto animado Maria es mi persona favorita " />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">

        <BentoGridSecondDemo />
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        Section 5
      </section>
      <section className="h-screen w-full bg-black flex items-center justify-center text-white text-4xl font-bold">
        Section 6
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