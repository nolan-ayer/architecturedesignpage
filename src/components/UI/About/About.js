import { useEffect } from "react";
import styles from "./About.module.css";
import Exec from "./Exec";
import VIP from "./VIP";

const execArray = [
  {
    name: "Nylan Aoler",
    title: "CEO",
    img: "https://images.pexels.com/photos/10031556/pexels-photo-10031556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Aolan Nyer",
    title: "CFO",
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Naoyer Alan",
    title: "Head of Development",
    img: "https://images.pexels.com/photos/8441881/pexels-photo-8441881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const vipArray = [
  { name: "Mirai Kuriyama", title: "Executive Designer" },
  { name: "Elise Leong", title: "Chief Architect" },
  { name: "Rob Smith", title: "Design Consultant" },
  { name: "Jim Crothers", title: "Tradesmaster" },
  { name: "Jediah Nakayama", title: "International Relations" },
  { name: "Inga Chen", title: "International Marketing and Advertising" },
  { name: "Liam Chong", title: "IT Director" },
  { name: "Felix Navidad", title: "Social Media Coordinator" },
  { name: "Sterling Archer", title: "World's Greatest Spy" },
  { name: "Golde Swordsmann", title: "Not the World's Greatest Spy" },
  { name: "Mike Myers", title: "Shrek" },
  { name: "Jimmy John", title: "Sammich Consultant" },
  { name: "Gertrude Bones", title: "Security Skeleton" },
  { name: "Clifford", title: "Big Red Dog" },
  { name: "Seymour Duncan", title: "Music and Jingles" },
  { name: "Anakin Skywalker", title: "Jedi Knight" },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="padded">
      <article className={styles.halfContainer}>
        <h3 className="pageTitle">
          ModArch Design Co. - Blending Japanese Traditions with Modern
          Architecture to Create Your Dream Home
        </h3>
        <p className="friendlyText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
          condimentum dui. Cras urna enim, convallis quis metus a, eleifend
          congue eros. Cras in malesuada mi. Curabitur tincidunt vehicula mauris
          id fermentum. Morbi interdum risus eu lacinia lacinia. Pellentesque
          varius, mauris ac volutpat auctor, sapien quam suscipit ante, non
          egestas ligula enim non erat. Nam ex nunc, dictum sed risus quis,
          interdum vulputate purus.
        </p>
        <p className="friendlyText">
          Quisque elementum a dui quis tristique. Fusce magna odio, consectetur
          vel laoreet a, volutpat fermentum nibh. Pellentesque dolor turpis,
          dapibus viverra semper a, auctor non orci. Nunc placerat quam auctor
          orci vehicula lacinia. In tincidunt metus quis elit mollis auctor.
          Integer condimentum turpis non tincidunt porta. Quisque a nunc
          malesuada, dignissim purus sit amet, egestas odio. Sed a facilisis
          lacus. Ut at tortor eu sapien sodales vulputate. Sed suscipit auctor
          diam, varius vulputate dolor dictum et. Aenean molestie suscipit
          imperdiet. Nam tortor eros, laoreet vel mi ut, hendrerit sollicitudin
          dui. Cras suscipit imperdiet sapien, et posuere.
        </p>
      </article>
      <span className={styles.cardContainer}>
        {execArray.map((items) => {
          return (
            <Exec
              key={items.key}
              name={items.name}
              title={items.title}
              img={items.img}
            />
          );
        })}
      </span>
      <section className={styles.listContainer}>
        {vipArray.map((items) => {
          return <VIP key={items.key} name={items.name} title={items.title} />;
        })}
      </section>
    </section>
  );
};

export default About;
