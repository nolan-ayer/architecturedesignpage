import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="linedBreak" />
      <ul className={styles.footerList}>
        <li className={styles.footerListItem}>
          <Link to="/contact" className={styles.footerLink}>
            Resources
          </Link>
        </li>
        <li className={styles.footerListItem}>
          <Link to="/contact" className={styles.footerLink}>
            Press
          </Link>
        </li>
        <li className={styles.footerListItem}>
          <Link to="/contact" className={styles.footerLink}>
            Where we work
          </Link>
        </li>
        <li className={styles.footerListItem}>
          <Link to="/contact" className={styles.footerLink}>
            Careers
          </Link>
        </li>
        <li className={styles.footerListItem}>
          <Link to="/contact" className={styles.footerLink}>
            Contact
          </Link>
        </li>
      </ul>
      <article className={styles.footerCopywrite}>
        I do not own the rights to any of the photographs displayed on this
        site. This is just a pseudo-copywrite article informing you that this
        site is very much copywrited even though its not.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </article>
    </section>
  );
};

export default Footer;
