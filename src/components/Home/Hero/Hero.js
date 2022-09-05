// React
import React from "react";
// React Router
import { Link } from "react-router-dom";
// Auth0
import { useAuth0 } from "@auth0/auth0-react";
// Images
import heroBcg from "./../../../assets/hero-bcg.jpeg";
import heroBcg2 from "./../../../assets/hero-bcg-2.jpeg";
// CSS
import styles from "./Hero.module.css";
// Components
import Loading from "../../Shared/Loading/Loading";
const Hero = () => {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className={`${styles.wrapper} section-center`}>
      <article className="content">
        {user && (
          <h4>
            Welcome <span>{user?.nickname}</span> for
          </h4>
        )}
        <h1>
          design your
          <br />
          comfort zone
        </h1>
        <p>
          Fill your home with furniture that brings you comfort as soon as you
          walk in the door. From cozy sectionals that work well for big
          get-togethers to beds that invite you for a good night's sleep after a
          long day, when you want to add modern, contemporary flair to your
          living space, comfy sloth has a wealth of items to enliven your space.
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
