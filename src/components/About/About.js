// React
import React from "react";
// Image
import aboutImg from "./../../assets/hero-bcg.jpeg";
// CSS
import styles from "./About.module.css";
// Components
import PageHero from "../Shared/PageHero/PageHero";
const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <div className={`${styles.wrapper} page section section-center`}>
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className={`${styles.title}`}>
            <h2>our story</h2>
            <div className={styles.underline}></div>
          </div>
          <p>
            We believe in great design, from around the corner to around the
            globe. That means supporting the people behind your products with
            ethical production, worker well-being and economic impact. From our
            Brooklyn studios, our in-house team designs exclusive collections
            you won't find anywhere else. We champion the maker movement in your
            own backyard to help strengthen local economies and boost burgeoning
            artists and designers, especially in underrepresented areas. We
            collaborate with artisan collectives around the world to help
            preserve their handcraft traditions and create opportunities for
            sustainable employment, especially in rural areas. We were the
            first-ever home retailer to join Fair Trade USA, ensuring workers
            fair wages, healthy working conditions and community development.
          </p>
        </article>
      </div>
    </main>
  );
};

export default About;
