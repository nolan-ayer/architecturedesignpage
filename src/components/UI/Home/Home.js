import { useEffect } from "react";
import HomeTile from "./HomeTile";

const homeData = [
  {
    key: 0,
    bannerPrimary: "This way home",
    bannerSecondary: "explore designs",
    linkTo: "/portfolio",
    img: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?",
    textBodyOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    textBodyTwo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    key: 1,
    bannerPrimary: "What sets Fake Company Name apart",
    bannerSecondary: "learn more about the process",
    linkTo: "/process",
    img: "https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?",
    textBodyOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo onsequat.",
    textBodyTwo:
      "Etiam lobortis nec enim a congue. Donec id lectus nec nulla volutpat viverra. Donec sit amet turpis congue, placerat sapien sed, blandit lacus. Quisque aliquam feugiat justo, eu rutrum elit ornare sed. Proin facilisis pharetra mauris eget hendrerit. Aenean malesuada elementum quam, quis laoreet risus tristique in. Quisque quis viverra eros. Nullam dictum in erat vitae ultrices. In suscipit elit mattis neque volutpat, non tempus enim maximus. Nunc volutpat in neque ut interdum. Quisque scelerisque blandit dui.",
  },
  {
    key: 2,
    bannerPrimary: "Contact us to discuss your project",
    bannerSecondary: "get in touch",
    linkTo: "/contact",
    img: "https://images.pexels.com/photos/6249543/pexels-photo-6249543.jpeg?",
    textBodyOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus   porttitor, turpis a tincidunt aliquet, ex nunc pretium orci, bibendum porta leo ligula ut eros. Mauris tortor dui, viverra in faucibus ac, ullamcorper a eros. Nam vestibulum dapibus ante, sed vulputate dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam eu volutpat leo, ut venenatis eros. Nunc metus elit, commodo ac risus in, convallis auctor ex. Quisque scelerisque quam eu finibus convallis. Vivamus sollicitudin urna at est finibus, ac pretium lectus rutrum. Quisque suscipit enim in gravida laoreet. Morbi semper, orci quis tempor finibus, purus lectus lacinia massa, dictum rhoncus sapien sapien quis quam. Phasellus sollicitudin diam mi. Morbi quis malesuada felis. Curabitur tempus vulputate elit nec eleifend.",
    textBodyTwo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      {homeData.map((items) => {
        return (
          <HomeTile
            key={items.key}
            bannerPrimary={items.bannerPrimary}
            bannerSecondary={items.bannerSecondary}
            linkTo={items.linkTo}
            img={items.img}
            textBodyOne={items.textBodyOne}
            textBodyTwo={items.textBodyTwo}
          />
        );
      })}
    </section>
  );
};

export default Home;
