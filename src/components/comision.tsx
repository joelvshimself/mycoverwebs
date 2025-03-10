import React from "react";
import styles from "./comision.module.css";
const boletosImg = "/boletos.svg"; 

const Comision: React.FC = () => {
  return (
    <section className={styles.comisionContainer}>
      {/* Título */}
      <h1 className={styles.title}>5% de Comisión</h1>

      {/* Imagen de los boletos */}
      <img src={boletosImg} alt="Boletos con 5% resaltado" className={styles.boletosImage} />

    </section>
  );
};

export default Comision;