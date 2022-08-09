// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// Images
import heroBcg from "./../../../assets/hero-bcg.jpeg";
import heroBcg2 from "./../../../assets/hero-bcg-2.jpeg";
// CSS
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={`${styles.wrapper} section-center`}>
      <article className="content">
        <h1>
          design your
          <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
          dignissimos iure vel inventore soluta ipsum id doloribus illo,
          voluptatibus minus velit placeat, pariatur neque dolore. Eos tempora
        </p>
        <Link to="/products" className={`btn ${styles["hero-btn"]}`}>
          shop now
        </Link>
      </article>
      <article className={styles["img-container"]}>
        <img src={heroBcg} alt="table" className={styles["main-img"]} />
        <img
          src={heroBcg2}
          alt="person working"
          className={styles["accent-img"]}
        />
      </article>
    </section>
  );
};

export default Hero;
