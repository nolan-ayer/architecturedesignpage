import { useLocation } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import styles from "./Layout.module.css";

const Layout = (props) => {
  const location = useLocation();
  return (
    <>
      <Header />
      {/* insert dynamic page name here as banner */}
      {window.location.pathname !== "/" && (
        <span className={styles.locationBanner}>
          {window.location.pathname}
        </span>
      )}
      <main className={styles.mainContainer}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
