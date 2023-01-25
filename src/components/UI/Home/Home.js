import { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className={styles.banner}>
        <img
          className={styles.bannerImage}
          alt="A commercial construction by Fake Company Name"
          src="https://media.architecturaldigest.com/photos/5eb9a47056ef867fb13cb69a/master/w_2000,h_1333,c_limit/2%20T3_028.jpg"
        />
        <div className={styles.bannerTextContainer}>
          <h4 className={styles.bannerTextPrimary}>This way home</h4>
          <Link to="/portfolio" className={styles.bannerTextSecondary}>
            explore designs
          </Link>
        </div>
      </div>
      <article className="padded">
        <p className="align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <div className={styles.banner}>
        <img
          className={styles.bannerImage}
          alt="Interior renovation by Fake Company Name"
          src="http://cdn.cnn.com/cnnnext/dam/assets/181115161449-11-japanese-ryokans-nishimuraya.jpg"
        />
        <div className={styles.bannerTextContainer}>
          <h4 className={styles.bannerTextPrimary}>
            What sets Fake Company Name apart
          </h4>
          <Link to="/process" className={styles.bannerTextSecondary}>
            learn more about the process
          </Link>
        </div>
      </div>
      <article className="padded">
        <p className="align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="align-center">
          Etiam lobortis nec enim a congue. Donec id lectus nec nulla volutpat
          viverra. Donec sit amet turpis congue, placerat sapien sed, blandit
          lacus. Quisque aliquam feugiat justo, eu rutrum elit ornare sed. Proin
          facilisis pharetra mauris eget hendrerit. Aenean malesuada elementum
          quam, quis laoreet risus tristique in. Quisque quis viverra eros.
          Nullam dictum in erat vitae ultrices. In suscipit elit mattis neque
          volutpat, non tempus enim maximus. Nunc volutpat in neque ut interdum.
          Quisque scelerisque blandit dui.
        </p>
      </article>
      <div className={styles.banner}>
        <img
          className={styles.bannerImage}
          alt="An interior residential construction by My Fake Architecture Company"
          src="https://media.architecturaldigest.com/photos/5eb9a47a56ef867fb13cb69e/master/w_2000,h_1333,c_limit/5%20T3_055.jpg"
        />
        <div className={styles.bannerTextContainer}>
          <h4 className={styles.bannerTextPrimary}>
            Contact us to discuss your project
          </h4>
          <Link to="/contact" className={styles.bannerTextSecondary}>
            get in touch
          </Link>
        </div>
      </div>
      <article className="padded">
        <p className="align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          porttitor, turpis a tincidunt aliquet, ex nunc pretium orci, bibendum
          porta leo ligula ut eros. Mauris tortor dui, viverra in faucibus ac,
          ullamcorper a eros. Nam vestibulum dapibus ante, sed vulputate dui.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nullam eu volutpat leo, ut venenatis eros. Nunc
          metus elit, commodo ac risus in, convallis auctor ex. Quisque
          scelerisque quam eu finibus convallis. Vivamus sollicitudin urna at
          est finibus, ac pretium lectus rutrum. Quisque suscipit enim in
          gravida laoreet. Morbi semper, orci quis tempor finibus, purus lectus
          lacinia massa, dictum rhoncus sapien sapien quis quam. Phasellus
          sollicitudin diam mi. Morbi quis malesuada felis. Curabitur tempus
          vulputate elit nec eleifend.
        </p>
        <p className="align-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </section>
  );
};

export default Home;
