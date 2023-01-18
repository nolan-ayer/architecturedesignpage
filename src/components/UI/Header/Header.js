import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  return (
    <nav className={styles.navContainer}>
      <Link
        to="/"
        className={
          window.location.pathname === "/"
            ? styles.navTitle__selected
            : styles.navTitle
        }
      >
        title
      </Link>
      <ul className={styles.buttonList}>
        <li>
          <Link
            to="/portfolio"
            className={
              window.location.pathname === "/portfolio"
                ? styles.navButton__selected
                : styles.navButton
            }
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/process"
            className={
              window.location.pathname === "/process"
                ? styles.navButton__selected
                : styles.navButton
            }
          >
            Process
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              window.location.pathname === "/about"
                ? styles.navButton__selected
                : styles.navButton
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact"
                ? styles.navButton__selected
                : styles.navButton
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
