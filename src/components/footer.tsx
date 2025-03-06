import { IconBrandInstagram } from "@tabler/icons-react";
import styles from "./Footer.module.css"; // Importamos el archivo CSS

export const Footer = () => {
  return (
    <footer className={styles.footerBg}>

      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>Sobre myCover</h2>
          <p>
            La forma más rápida y segura de comprar entradas para eventos exclusivos. 
            Accede con tu código QR único y disfruta sin preocupaciones.
          </p>
        </div>
        
        <div className={styles.footerSection}>
          <h2>Síguenos</h2>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/mycover_app/" className={styles.icon}>
              <IconBrandInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© 2025 myCover. Todos los derechos reservados.</p>
        <p>
          <a href="/terminos">Términos y condiciones</a> | 
          <a href="/privacidad"> Política de privacidad</a> | 
          <a href="/reembolsos"> Política de reembolsos</a>
        </p>
      </div>
    </footer>
  );
};
