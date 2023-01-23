import React, { useState } from "react";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({ imgAlt, imgSrc, title, description }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className={styles.items}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <img className={styles.itemImage} alt={imgAlt} src={imgSrc} />
      <div className={!isHover ? "" : styles.itemImage__mouseOver} />
      <section className={styles.itemTextContainer}>
        <article
          className={!isHover ? styles.itemTitle : styles.itemTitle__mouseOver}
        >
          {title}
        </article>
        <article
          className={
            !isHover
              ? styles.itemDescription
              : styles.itemDescription__mouseOver
          }
        >
          {description}
        </article>
      </section>
    </li>
  );
};

export default PortfolioCard;
