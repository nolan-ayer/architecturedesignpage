import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Process.module.css";

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url =
    "https://s.yimg.com/uu/api/res/1.2/TT1JWVV4jlg4L2T.r41Dcg--~B/Zmk9ZmlsbDtoPTc1MDt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/92df8b0b2020b5204e4b989b58777249/204467160/pepe+the+frog.png.cf.jpg";
  const alt =
    "Partway through the process of building a home with Fake Company";
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
        <img className="contentSpanImage" src={url} alt={alt} />
      </article>
      <span className={styles.majorContainer}>
        <h4 className={styles.headerSpan}>Our process</h4>
        <span className={styles.contentSpan}>
          <div>
            <img className="contentSpanImage" src={url} alt={alt} />
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
            <img className="contentSpanImage" src={url} alt={alt} />
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
            <img className="contentSpanImage" src={url} alt={alt} />
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
            <img className="contentSpanImage" src={url} alt={alt} />
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
            <img className="contentSpanImage" src={url} alt={alt} />
            <h4 className="textSpan">Universal design is a good design</h4>
          </Link>
          <Link className="navLink-black" to="/">
            <img className="contentSpanImage" src={url} alt={alt} />
            <h4 className="textSpan">Why we use prefab panels</h4>
          </Link>
          <Link className="navLink-black" to="/">
            <img className="contentSpanImage" src={url} alt={alt} />
            <h4 className="textSpan">Your home evolves as we do</h4>
          </Link>
        </span>
      </span>
    </section>
  );
};

export default Process;
