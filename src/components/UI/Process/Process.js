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
      <div className={styles.mainArticle}>
        <h3 className="pageTitle">What sets our method apart</h3>
        <div className={styles.introContainer}>
          <article>
            <section className="friendlyText">
              At our design company, we take a unique approach to every project
              that sets us apart from the competition. We believe that great
              design is about more than just aesthetics - it's about
              understanding the needs and goals of our clients and creating
              solutions that are both functional and beautiful.
            </section>
            <section className="friendlyText">
              Our method starts with a deep dive into our clients' vision,
              objectives, and challenges. We take the time to listen, ask
              questions, and truly understand what they want to achieve. From
              there, we combine our creativity and technical expertise to
              develop custom solutions that meet their specific needs.
            </section>
            <section className="friendlyText">
              But we don't stop there. We also believe in a collaborative
              process that involves our clients every step of the way. We seek
              feedback and input to ensure that the final product is exactly
              what they envisioned. And we're not satisfied until they are.
            </section>
            <section className="friendlyText">
              Finally, we pride ourselves on staying up-to-date with the latest
              trends and technologies in design. We're always exploring new
              techniques and tools to deliver cutting-edge solutions that set
              our clients apart from the competition.
            </section>
            <section className="friendlyText">
              In short, our method is all about understanding our clients'
              needs, collaborating with them throughout the process, and
              delivering top-notch results that are both functional and
              beautiful.
            </section>
          </article>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={
                "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
              title="Renewable energy facility used by ModArch Design Co."
            />
          </div>
        </div>
      </div>
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
            <h5 className={styles.headerSpan}>Your vision becomes a design</h5>
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
            <h5 className={styles.headerSpan}>Predictability of cost</h5>
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
            <h5 className={styles.headerSpan}>How systems-built works</h5>
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
            <h5 className={styles.headerSpan}>Build your home</h5>
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
            <span className="textSpan">{`> Universal design is a good design`}</span>
          </Link>
          <Link className="navLink-black" to="/">
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <span className="textSpan">{`> Why we use prefab panels`}</span>
          </Link>
          <Link className="navLink-black" to="/">
            <img
              className="contentSpanImage"
              src={
                "https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt={alt}
            />
            <span className="textSpan">{`> Your home evolves as we do`}</span>
          </Link>
        </span>
      </span>
    </section>
  );
};

export default Process;
