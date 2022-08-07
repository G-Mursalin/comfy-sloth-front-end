// React
import React from "react";
// Image
import aboutImg from "./../../assets/hero-bcg.jpeg";
// CSS
import styles from "./About.module.css";
// Components
import PageHero from "../PageHero/PageHero";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est
            expedita tenetur magnam dolor dolorem repellat aspernatur natus.
            Quod cumque omnis itaque quis hic, reprehenderit totam pariatur
            consequuntur et id? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum est expedita tenetur magnam dolor dolorem
            repellat aspernatur natus. Quod cumque omnis itaque quis hic,
            reprehenderit totam pariatur consequuntur et id? adipisicing elit.
            Earum est expedita tenetur magnam dolor dolorem repellat aspernatur
            natus. Quod cumque omnis itaque quis hic, reprehenderit totam
            pariatur consequuntur et id? adipisicing elit. Earum est expedita
            tenetur magnam dolor dolorem repellat aspernatur natus. Quod cumque
            omnis itaque quis hic, reprehenderit totam pariatur consequuntur et
            id?
          </p>
        </article>
      </div>
    </main>
  );
};

export default About;
