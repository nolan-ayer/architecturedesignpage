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
          At our company, we are proud to have a team of dedicated and skilled
          professionals who are committed to providing the best possible service
          to our clients. Our team is made up of architects, designers,
          builders, and project managers, each bringing their own unique
          perspective and expertise to every project. We believe that our team
          is the heart and soul of our company, and we are grateful for the hard
          work and dedication they bring to each and every job.
        </p>
        <p className="friendlyText">
          Our team is passionate about what they do, and it shows in the quality
          of their work. From the initial consultation to the final walkthrough,
          our team is focused on creating a space that meets the unique needs
          and desires of each client. We take pride in our ability to work
          closely with our clients to understand their vision and turn it into a
          beautiful, functional reality.
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
