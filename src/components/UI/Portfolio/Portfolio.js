import React, { useEffect, useState } from "react";
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
    originalPage:
      "https://www.architecturaldigest.com/gallery/home-beautifully-blends-traditional-modern-japanese-architecture",
  },
  {
    key: 1,
    imgSrc:
      "https://media.architecturaldigest.com/photos/5eb9a48327436b96d524c1b3/master/w_2000,h_1332,c_limit/7%20T3_001.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
    originalPage:
      "https://www.architecturaldigest.com/gallery/home-beautifully-blends-traditional-modern-japanese-architecture",
  },
  {
    key: 2,
    imgSrc:
      "https://images.adsttc.com/media/images/6037/0ec7/f91c/8122/3000/03d3/slideshow/_FI_2_EXTERIOR_2.jpg?1614220985",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
    originalPage:
      "https://www.archdaily.com/957599/j-house-y0-design-architect/60370ec7f91c8122300003d3-j-house-y0-design-architect-photo",
  },
  {
    key: 3,
    imgSrc:
      "https://media.architecturaldigest.com/photos/5eb9a46a4272e32baf9445c0/master/pass/1%20T3_023.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
    originalPage:
      "https://www.architecturaldigest.com/gallery/home-beautifully-blends-traditional-modern-japanese-architecture",
  },
  {
    key: 4,
    imgSrc:
      "https://static.dezeen.com/uploads/2017/12/house-of-holly-osmanthus-takashi-okuno-architecture-residential-japan_dezeen_hero-1.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
    originalPage:
      "https://www.dezeen.com/2017/12/30/takashi-okuno-arranges-hiiragis-house-around-a-decked-central-courtyard/",
  },
  {
    key: 5,
    imgSrc:
      "https://st.hzcdn.com/simgs/pictures/exteriors/japanese-inspired-ranch-home-ra-nelson-llc-img~c1415a6007433a7b_14-4081-1-af35eba.jpg",
    imgAlt: "A stunning photo of some architecture",
    title: "sample title",
    description: "sample description",
    originalPage:
      "https://www.houzz.com/photos/japanese-inspired-ranch-home-asian-exterior-denver-phvw-vp~55199082",
  },
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            originalPage={items.originalPage}
          />
        );
      })}
    </ul>
  );
};

export default Portfolio;
