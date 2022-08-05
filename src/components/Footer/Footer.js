// React
import React from "react";
// CSS
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles["wrapper"]}>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth</span>
      </h5>
      <h5>All rights reserved</h5>
    </footer>
  );
};

export default Footer;
