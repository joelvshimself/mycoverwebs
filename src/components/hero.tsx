import styles from "./hero.module.css";
import TestSheet from "./testsheet";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <img className={styles.logo} src="./logobrillo.png" alt="MyCover Logo" />
        <h1 className={styles.title}>myCover app</h1>
        <p className={styles.subtitle}>Where Party starts.</p>
        <button onClick={() => setIsOpen(true)} className={styles.button}>
          Apply for a demo
        </button>
      </section>

      {isOpen && <TestSheet onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Hero;
