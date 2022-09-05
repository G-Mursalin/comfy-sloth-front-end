// React
import React from "react";
// CSS
import styles from "./Services.module.css";
// React Icons
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Our mission is to nurture and sustain an organization that values and promotes diversity. Diversity in thought, culture and background—at all levels. create Value for our customers through Reliability and Flexibility. We want our customers to experience the warmth and comfort through Respect and Trust.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to be a leading international furniture manufacturer offering innovative and superior quality products. This statement reflects our purpose and anticipation for the future, inspiring factors that drive us forward in providing the best value-for-money products accompanied by the best service in the industry, right from design to delivery.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Comfy Sloth is established becoming the parent company of VKF, ACF and KM Furniture—the brand's furniture manufacturing facility in North Carolina. The company reaches a billion dollars in sales.",
  },
];
const Services = () => {
  return (
    <section className={styles.wrapper}>
      <div className="section-center">
        <article className={styles.header}>
          <h3>
            custom furniture <br /> built only for you
          </h3>
          <p>
            Actions speak louder than words. We look to leading authorities in
            sustainable sourcing, ethical design and responsible manufacturing
            and work to meet their standards. So when we make a claim, you know
            we can back it up.
          </p>
        </article>
        <div className={styles["services-center"]}>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className={styles.service}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
