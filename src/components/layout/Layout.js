import { useLocation } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Header from "../UI/Header/Header";
import styles from "./Layout.module.css";

const Layout = (props) => {
  const location = useLocation();

  const pageNames = ["Home", "About", "Contact", "Portfolio"];

  const pageNameChecker = () => {
    if (!window.location.pathname.includes(pageNames)) {
      return (
        <>
          {window.location.pathname !== "/" && (
            <span className={styles.locationBanner}>
              {window.location.pathname}
            </span>
          )}
        </>
      );
    } else {
      return;
    }
  };

  return (
    <>
      <Header />
      {pageNameChecker()}
      <main className={styles.mainContainer}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
