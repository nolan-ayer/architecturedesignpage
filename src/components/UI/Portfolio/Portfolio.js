import React, { useEffect } from "react";
import styles from "./Portfolio.module.css";
import PortfolioCard from "./PortfolioCard";

//make portfolio card component to scope the state down to a per card basis

const cardList = [
  {
    key: 0,
    imgSrc:
      "https://images.pexels.com/photos/4087904/pexels-photo-4087904.jpeg?",
    imgAlt: "A stunning photo of some architecture",
    title: "Kyoto",
    description: "Features tons of natural light and tatami floors",
    originalPage:
      "https://www.pexels.com/photo/blooming-sakura-in-yard-of-japanese-house-4087904/",
  },
  {
    key: 1,
    imgSrc:
      "https://images.pexels.com/photos/4087899/pexels-photo-4087899.jpeg?",
    imgAlt: "A stunning photo of some architecture",
    title: "Tokyo",
    description: "Compact footprint with impressively spacious interior",
    originalPage:
      "https://www.pexels.com/photo/green-garden-around-old-traditional-oriental-temple-4087899/",
  },
  {
    key: 2,
    imgSrc:
      "https://images.pexels.com/photos/4679108/pexels-photo-4679108.jpeg?",
    imgAlt: "A stunning photo of some architecture",
    title: "Yokohama",
    description: "Japanese style with western influence",
    originalPage:
      "https://www.pexels.com/photo/black-traditional-house-surrounded-with-green-plants-4679108/",
  },
  {
    key: 3,
    imgSrc:
      "https://images.pexels.com/photos/7526814/pexels-photo-7526814.jpeg?",
    imgAlt: "A stunning photo of some architecture",
    title: "Hiroshima",
    description: "Earthquake resistant concrete foundation",
    originalPage:
      "https://www.pexels.com/photo/street-with-wooden-houses-7526814/",
  },
  {
    key: 4,
    imgSrc:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?",
    imgAlt: "A stunning photo of some architecture",
    title: "Aichi",
    description: "Designed and manufactured by Toyota",
    originalPage:
      "https://www.pexels.com/photo/sun-piercing-of-brown-concrete-house-near-sea-1732414/",
  },
  {
    key: 5,
    imgSrc: "https://images.pexels.com/photos/127578/pexels-photo-127578.jpeg?",
    imgAlt: "A stunning photo of some architecture",
    title: "Nagano",
    description: "Rustic meets modern",
    originalPage:
      "https://www.pexels.com/photo/green-leaf-tree-near-white-and-brown-shack-127578/",
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
