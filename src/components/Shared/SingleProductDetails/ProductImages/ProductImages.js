// React
import React, { useState } from "react";
// CSS
import styles from "./ProductImages.module.css";
const ProductImages = ({ images }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <section className={styles.container}>
      <img src={main.url} alt="main" className={styles.main} />
      <div className={styles.gallery}>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? styles.active : null}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
