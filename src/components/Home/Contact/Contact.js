// React
import React from "react";
// CSS
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <section className={styles.wrapper}>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam
            vero?
          </p>
          <form
            className={styles["contact-form"]}
            action="https://formspree.io/f/xpznzwdy"
            method="POST"
          >
            <input
              type="email"
              className={styles["form-input"]}
              placeholder="enter email"
              name="email"
            />
            <button type="submit" className={styles["submit-btn"]}>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
