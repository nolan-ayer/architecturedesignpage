import styles from "./About.module.css";

const About = () => {
  const url =
    "https://s.yimg.com/uu/api/res/1.2/TT1JWVV4jlg4L2T.r41Dcg--~B/Zmk9ZmlsbDtoPTc1MDt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/92df8b0b2020b5204e4b989b58777249/204467160/pepe+the+frog.png.cf.jpg";
  return (
    <section className="padded">
      <article className={styles.halfContainer}>
        <h3 className="pageTitle">
          Fake Company Name is an an inspired designer of well equipped, modern
          homes with Japanese flair.
        </h3>
        <p className="friendlyText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
          condimentum dui. Cras urna enim, convallis quis metus a, eleifend
          congue eros. Cras in malesuada mi. Curabitur tincidunt vehicula mauris
          id fermentum. Morbi interdum risus eu lacinia lacinia. Pellentesque
          varius, mauris ac volutpat auctor, sapien quam suscipit ante, non
          egestas ligula enim non erat. Nam ex nunc, dictum sed risus quis,
          interdum vulputate purus. Quisque elementum a dui quis tristique.
          Fusce magna odio, consectetur vel laoreet a, volutpat fermentum nibh.
          Pellentesque dolor turpis, dapibus viverra semper a, auctor non orci.
          Nunc placerat quam auctor orci vehicula lacinia. In tincidunt metus
          quis elit mollis auctor. Integer condimentum turpis non tincidunt
          porta. Quisque a nunc malesuada, dignissim purus sit amet, egestas
          odio. Sed a facilisis lacus. Ut at tortor eu sapien sodales vulputate.
          Sed suscipit auctor diam, varius vulputate dolor dictum et. Aenean
          molestie suscipit imperdiet. Nam tortor eros, laoreet vel mi ut,
          hendrerit sollicitudin dui. Cras suscipit imperdiet sapien, et
          posuere.
        </p>
      </article>
      <span className={styles.cardContainer}>
        <div>
          <img className="contentSpanImage" src={url} />
          <article className={styles.nameContainer}>
            <h4>Nolan Ayer</h4>
            <p className="friendlyText">Creative Director</p>
          </article>
        </div>
        <div>
          <img className="contentSpanImage" src={url} />
          <article className={styles.nameContainer}>
            <h4>Aolan Nyer</h4>
            <p className="friendlyText">Interiors Director</p>
          </article>
        </div>
        <div>
          <img className="contentSpanImage" src={url} />
          <article className={styles.nameContainer}>
            <h4>Naoyer Alan</h4>
            <p className="friendlyText">Lead Engineer</p>
          </article>
        </div>
      </span>
      <section className={styles.listContainer}>
        <article className={styles.nameContainer}>
          <h4>Gertrude Bones</h4>
          <p className="friendlyText">Associate, Director of Design</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Liam Chong</h4>
          <p className="friendlyText">IT Director</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Jimmy John</h4>
          <p className="friendlyText">Sandwich Expert</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Mike Myers</h4>
          <p className="friendlyText">Resident XL Green Dude</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Jim Crothers</h4>
          <p className="friendlyText">Designer</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Elise Leong</h4>
          <p className="friendlyText">Architect</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Jediah Nakayama</h4>
          <p className="friendlyText">International Relations</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Inga Chen</h4>
          <p className="friendlyText">
            International Marketing and Advertising
          </p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Rob Smith</h4>
          <p className="friendlyText">Sales Manager</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Joffrey Baratheon</h4>
          <p className="friendlyText">Tyrant King</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Felix Gleeson</h4>
          <p className="friendlyText">Social Media Coordinator</p>
        </article>
        <article className={styles.nameContainer}>
          <h4>Mirai Kuriyama</h4>
          <p className="friendlyText">Waifu</p>
        </article>
      </section>
    </section>
  );
};

export default About;
