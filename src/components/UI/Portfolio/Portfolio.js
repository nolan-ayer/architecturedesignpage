import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import PortfolioCard from "./PortfolioCard";

//make portfolio card component to scope the state down to a per card basis

const cardList = [
  {
    key: 0,
    imgSrc:
      "https://media.architecturaldigest.com/photos/5eb9a47056ef867fb13cb69a/master/w_2000,h_1333,c_limit/2%20T3_028.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
  },
  {
    key: 1,
    imgSrc:
      "https://media.architecturaldigest.com/photos/5eb9a48327436b96d524c1b3/master/w_2000,h_1332,c_limit/7%20T3_001.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
  },
  {
    key: 2,
    imgSrc:
      "https://www.decorants.com/wp-content/uploads/2021/03/Modern-Japanese-House-Designs-to-Inspire-You.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
  },
  {
    key: 3,
    imgSrc:
      "https://media.architecturaldigest.com/photos/5eb9a46a4272e32baf9445c0/master/pass/1%20T3_023.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
  },
  {
    key: 4,
    imgSrc:
      "https://static.dezeen.com/uploads/2017/12/house-of-holly-osmanthus-takashi-okuno-architecture-residential-japan_dezeen_hero-1.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
  },
  {
    key: 5,
    imgSrc:
      "https://st.hzcdn.com/simgs/pictures/exteriors/japanese-inspired-ranch-home-ra-nelson-llc-img~c1415a6007433a7b_14-4081-1-af35eba.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
  },
];

const Portfolio = () => {
  return (
    <ul className={styles.itemList}>
      {cardList.map((items) => {
        return (
          <PortfolioCard
            key={items.key}
            imgSrc={items.imgSrc}
            imgAlt={items.imgAlt}
            title={items.title}
            description={items.description}
          />
        );
      })}
    </ul>
  );
};

export default Portfolio;
