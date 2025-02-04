import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
        <img className={styles.logo} src="./mycoverlogoicon.png" alt="" />
        <h1 className={styles.title}>myCover app</h1>
        <p className={styles.subtitle}>Where Party starts.</p>
        <button className={styles.button}>aply for a demo</button>
    </section>

  );
};

export default Hero;