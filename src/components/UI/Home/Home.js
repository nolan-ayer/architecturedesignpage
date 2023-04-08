import { useEffect } from "react";
import HomeTile from "./HomeTile";

const homeData = [
  {
    key: 0,
    bannerPrimary: "This way home",
    bannerSecondary: "explore designs",
    linkTo: "/portfolio",
    img: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?",
    textHeader: "Our methodology of design",
    textBodyOne: `At ModArch Design Co., we believe in creating homes that seamlessly blend the beauty of Japanese traditions with modern architecture. We understand that every home is unique, which is why we work closely with our clients to create personalized designs that perfectly fit their vision and lifestyle. Our goal is to create homes that not only look stunning but also provide a functional and comfortable living space for our clients.`,
    textBodyTwo: `Our design philosophy is inspired by the Japanese concept of "Wabi-Sabi," which celebrates the beauty of imperfection and embraces natural materials and minimalism. We believe that this approach allows us to create timeless designs that are not only aesthetically pleasing but also sustainable and durable.`,
  },
  {
    key: 1,
    bannerPrimary: "What sets ModArch Design Co. apart",
    bannerSecondary: "learn more about the process",
    linkTo: "/process",
    img: "https://images.pexels.com/photos/210547/pexels-photo-210547.jpeg?",
    textHeader: "Bringing your concepts to life",
    textBodyOne:
      "At ModArch Design Co., we take a collaborative approach to our design process. We start by understanding our client's vision, needs, and budget, followed by an extensive research and analysis phase. During this phase, we gather inspiration, study the site, and create initial sketches to present to our clients.",
    textBodyTwo:
      "Once we have a solid design concept, we work on refining the details, selecting materials, and creating technical drawings. We also work closely with our construction team to ensure that the design is feasible and meets building codes.",
    textBodyThree:
      "Throughout the entire design process, we communicate openly with our clients to ensure that their vision is realized. Our goal is to create a stress-free and enjoyable experience for our clients, resulting in a home that they can be proud of.",
  },
  {
    key: 2,
    bannerPrimary: "Contact us to discuss your project",
    bannerSecondary: "get in touch",
    linkTo: "/contact",
    img: "https://images.pexels.com/photos/6249543/pexels-photo-6249543.jpeg?",
    textHeader: "Ready to start creating your dream home? ",
    textBodyOne:
      "At ModArch Design Co., we are passionate about bringing our client's vision to life. Whether you are looking to build a new home or renovate an existing one, our team is here to help. Contact us today to schedule a consultation and take the first step towards creating the home of your dreams.",
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
            textHeader={items.textHeader}
            textBodyOne={items.textBodyOne}
            textBodyTwo={items.textBodyTwo}
            textBodyThree={items.textBodyThree}
          />
        );
      })}
    </section>
  );
};

export default Home;
