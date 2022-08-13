// React
import React from "react";
// CSS
import styles from "./CheckOut.module.css";
// Components
import PageHero from "../Shared/PageHero/PageHero";
const CheckOut = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <div className={styles.wrapper}>
        <div className="page">
          <h3>Check Out</h3>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
