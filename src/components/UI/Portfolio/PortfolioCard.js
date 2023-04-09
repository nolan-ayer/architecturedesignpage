import React, { useState } from "react";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({
  description,
  imgAlt,
  imgSrc,
  originalPage,
  title,
}) => {
  const [isHover, setIsHover] = useState(false);

  const loadOrigin = () => {
    window.open(originalPage);
  };

  return (
    <li
      className={styles.items}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      onClick={loadOrigin}
    >
      <div
        className={styles.imageContainer}
        title={`The ${title} commission, by ModArch Design Co.`}
      >
        <img className={styles.itemImage} alt={imgAlt} src={imgSrc} />
        <div className={!isHover ? "" : styles.itemImage__mouseOver} />
      </div>
      <section className={styles.itemTextContainer}>
        <h5
          className={!isHover ? styles.itemTitle : styles.itemTitle__mouseOver}
        >
          {title}
        </h5>
        <span
          className={
            !isHover
              ? styles.itemDescription
              : styles.itemDescription__mouseOver
          }
        >
          {description}
        </span>
      </section>
    </li>
  );
};

export default PortfolioCard;
