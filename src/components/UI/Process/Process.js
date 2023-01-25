import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Process.module.css";

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const alt = "A stage in the building process of a Fake Company house";
  return (
    <section className="padded">
      <article className={styles.mainArticle}>
        <h3 className="pageTitle">What sets our method apart</h3>
        <p className="friendlyText">
          Etiam lobortis nec enim a congue. Donec id lectus nec nulla volutpat
          viverra. Donec sit amet turpis congue, placerat sapien sed, blandit
          lacus. Quisque aliquam feugiat justo, eu rutrum elit ornare sed. Proin
          facilisis pharetra mauris eget hendrerit. Aenean malesuada elementum
          quam, quis laoreet risus tristique in. Quisque quis viverra eros.
          Nullam dictum in erat vitae ultrices. In suscipit elit mattis neque
          volutpat, non tempus enim maximus. Nunc volutpat in neque ut interdum.
          Quisque scelerisque blandit dui.
        </p>
        <img
          className="contentSpanImageHeader"
          src={
            "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={alt}
        />
      </article>
      <span className={styles.majorContainer}>
        <h4 className={styles.headerSpan}>Our process</h4>
        <span className={styles.contentSpan}>
          <div>
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/6758533/pexels-photo-6758533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <h4 className={styles.headerSpan}>Your vision becomes a design</h4>
            <p className="friendlyText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              posuere erat tortor. Nunc rutrum sagittis ullamcorper. Proin at
              felis urna. Donec eleifend tortor id tincidunt mollis.
            </p>
            <nav>
              <Link to="" className="navLink-black">
                {`> custom design process`}
              </Link>
            </nav>
          </div>
          <div>
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/6908502/pexels-photo-6908502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <h4 className={styles.headerSpan}>Predictability of cost</h4>
            <p className="friendlyText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              posuere erat tortor. Nunc rutrum sagittis ullamcorper. Proin at
              felis urna.
            </p>
            <nav>
              <Link to="" className="navLink-black">
                {`> project plan and budget`}
              </Link>
            </nav>
          </div>
          <div>
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/1743555/pexels-photo-1743555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <h4 className={styles.headerSpan}>How systems-built works</h4>
            <p className="friendlyText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              posuere erat tortor. Nunc rutrum sagittis ullamcorper. Proin at
              felis urna. Donec eleifend tortor id tincidunt mollis. Nulla
              interdum, libero at commodo maximus, nunc lorem porta nisl, eget
              faucibus libero tellus a leo.
            </p>
            <nav>
              <Link to="" className="navLink-black">
                {`> what's included`}
              </Link>
            </nav>
          </div>
          <div>
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/11979837/pexels-photo-11979837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <h4 className={styles.headerSpan}>Build your home</h4>
            <p className="friendlyText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              posuere erat tortor. Nunc rutrum sagittis ullamcorper. Proin at
              felis urna. Donec eleifend tortor id tincidunt mollis.
            </p>
            <nav>
              <Link to="" className="navLink-black">
                {`> delivery and assembly`}
              </Link>
            </nav>
          </div>
        </span>
      </span>
      <span className={styles.majorContainer}>
        <h4 className={styles.headerSpan}>Process articles</h4>
        <span className={styles.contentSpan}>
          <Link className="navLink-black" to="/">
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/7937754/pexels-photo-7937754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <h4 className="textSpan">Universal design is a good design</h4>
          </Link>
          <Link className="navLink-black" to="/">
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <h4 className="textSpan">Why we use prefab panels</h4>
          </Link>
          <Link className="navLink-black" to="/">
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <h4 className="textSpan">Your home evolves as we do</h4>
          </Link>
        </span>
      </span>
    </section>
  );
};

export default Process;
