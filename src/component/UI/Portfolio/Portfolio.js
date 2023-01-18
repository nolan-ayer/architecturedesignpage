import React, { useState } from "react";
import styles from "./Portfolio.module.css";

//make portfolio card component to scope the state down to a per card basis

const Portfolio = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <ul className={styles.itemList}>
      <li
        className={styles.items}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
      >
        <img
          className={styles.itemImage}
          alt="A stunning photo of some architecture"
          src="https://media.architecturaldigest.com/photos/5eb9a47056ef867fb13cb69a/master/w_2000,h_1333,c_limit/2%20T3_028.jpg"
        />
        <div className={!isHover ? "" : styles.itemImage__mouseOver} />
        <section className={styles.itemTextContainer}>
          <article
            className={
              !isHover ? styles.itemTitle : styles.itemTitle__mouseOver
            }
          >
            This is a title of the item
          </article>
          <article
            className={
              !isHover
                ? styles.itemDescription
                : styles.itemDescription__mouseOver
            }
          >
            This is a brief description of the item
          </article>
        </section>
      </li>
      <li className={styles.items}>
        <img
          className={styles.itemImage}
          alt=""
          src="https://media.architecturaldigest.com/photos/5eb9a48327436b96d524c1b3/master/w_2000,h_1332,c_limit/7%20T3_001.jpg"
        />
        <section className={styles.itemTextContainer}>
          <article className={styles.itemTitle}>
            This is a title of the item
          </article>
          <article className={styles.itemDescription}>
            This is a brief description of the item
          </article>
        </section>
      </li>
      <li className={styles.items}>
        <img
          className={styles.itemImage}
          alt=""
          src="https://www.decorants.com/wp-content/uploads/2021/03/Modern-Japanese-House-Designs-to-Inspire-You.jpg"
        />
        <section className={styles.itemTextContainer}>
          <article className={styles.itemTitle}>
            This is a title of the item
          </article>
          <article className={styles.itemDescription}>
            This is a brief description of the item
          </article>
        </section>
      </li>
      <li className={styles.items}>
        <img
          className={styles.itemImage}
          alt=""
          src="https://media.architecturaldigest.com/photos/5eb9a46a4272e32baf9445c0/master/pass/1%20T3_023.jpg"
        />
        <section className={styles.itemTextContainer}>
          <article className={styles.itemTitle}>
            This is a title of the item
          </article>
          <article className={styles.itemDescription}>
            This is a brief description of the item
          </article>
        </section>
      </li>
      <li className={styles.items}>
        <img
          className={styles.itemImage}
          alt=""
          src="https://static.dezeen.com/uploads/2017/12/house-of-holly-osmanthus-takashi-okuno-architecture-residential-japan_dezeen_hero-1.jpg"
        />
        <section className={styles.itemTextContainer}>
          <article className={styles.itemTitle}>
            This is a title of the item
          </article>
          <article className={styles.itemDescription}>
            This is a brief description of the item
          </article>
        </section>
      </li>
      <li className={styles.items}>
        <img
          className={styles.itemImage}
          alt=""
          src="https://st.hzcdn.com/simgs/pictures/exteriors/japanese-inspired-ranch-home-ra-nelson-llc-img~c1415a6007433a7b_14-4081-1-af35eba.jpg"
        />
        <section className={styles.itemTextContainer}>
          <article className={styles.itemTitle}>
            This is a title of the item
          </article>
          <article className={styles.itemDescription}>
            This is a brief description of the item
          </article>
        </section>
      </li>
    </ul>
  );
};

export default Portfolio;
