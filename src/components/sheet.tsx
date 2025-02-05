import React from "react";
import styles from "./sheet.module.css";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Let's Get in Touch</h2>
      <p className={styles.subtext}>
        Make sure to contact us if you have any doubt or proposal to help create something amazing together.
      </p>
      <div className={styles.contactMethods}>
        <p className={styles.contactItem}>📷 Benjaminbellocoil_</p>
        <p className={styles.contactItem}>🏛️ Benjaminbellocoil</p>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Your name" className={styles.input} />
        <input type="email" placeholder="Your email" className={styles.input} />
        <input type="tel" placeholder="Your phone (optional)" className={styles.input} />
        <textarea placeholder="Your message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default ContactForm;
