import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="linedBreak" />
      <ul className={styles.footerList}>
        <li className={styles.footerListItem}>
          <button className={styles.footerButton}>Resources</button>
        </li>
        <li className={styles.footerListItem}>
          <button className={styles.footerButton}>Press</button>
        </li>
        <li className={styles.footerListItem}>
          <button className={styles.footerButton}>Where we work</button>
        </li>
        <li className={styles.footerListItem}>
          <button className={styles.footerButton}>Careers</button>
        </li>
        <li className={styles.footerListItem}>
          <button className={styles.footerButton}>Contact</button>
        </li>
      </ul>
      <article className={styles.footerCopywrite}>
        This is just a pseudo-copywrite article informing you that this site is
        very much copywrited even though its not Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </article>
    </section>
  );
};

export default Footer;
