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
              At our company, we take great pride in our commitment to using
              clean, renewable energy and sustainable materials in all of our
              building projects. Our method sets us apart in the industry and
              has earned us a reputation for being a responsible,
              environmentally conscious builder. We understand the importance of
              minimizing our carbon footprint and reducing waste, and we are
              constantly exploring new ways to achieve these goals.
            </section>
            <section className="friendlyText">
              One of the ways we stand out is through our use of clean renewable
              energy. We are dedicated to utilizing solar, wind, and other
              renewable energy sources wherever possible. This not only helps to
              reduce our carbon footprint, but it also saves our clients money
              on their energy bills in the long run. We work closely with our
              clients to determine the best renewable energy options for their
              specific needs and incorporate these solutions into the design of
              their homes.
            </section>
            <section className="friendlyText">
              Another way we set ourselves apart is through our use of
              sustainable materials. We prioritize the use of materials that are
              environmentally friendly and have a lower impact on the planet.
              This includes everything from recycled building materials to
              sustainably sourced lumber. We work with our clients to find the
              right balance between sustainability and cost-effectiveness, and
              we are always on the lookout for new materials and techniques that
              can help us achieve our sustainability goals.
            </section>
            <section className="friendlyText">
              In addition to our commitment to clean energy and sustainable
              materials, our method is also distinguished by our attention to
              detail and our focus on the needs and desires of our clients. We
              understand that building a home is a significant investment, and
              we take this responsibility seriously. We work closely with our
              clients to ensure that every detail is accounted for, from the
              layout and design of the home to the finishes and materials used
              in the construction process.
            </section>
            <section className="friendlyText">
              Our team of architects, designers, builders, and project managers
              is passionate about what they do and committed to delivering
              exceptional service to our clients. We understand that building a
              home can be a complex and daunting process, and we strive to make
              it as stress-free and enjoyable as possible. Our team is always
              available to answer questions and provide guidance throughout the
              building process, and we work tirelessly to ensure that our
              clients are completely satisfied with the final result.
            </section>
            <section className="friendlyText">
              In conclusion, our commitment to clean, renewable energy and
              sustainable materials, our attention to detail, and our focus on
              the needs and desires of our clients all set our method apart in
              the industry. We believe that building a home should be a
              positive, rewarding experience, and we are dedicated to making
              that a reality for our clients. We are proud of the work that we
              do and look forward to continuing to provide exceptional service
              to our clients for years to come.
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
              We turn your vision into a beautifully crafted design that
              reflects your unique personality and lifestyle, creating a space
              that feels like home.
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
              We understand the importance of predictability in building your
              dream home. That's why we offer transparent and accurate cost
              estimates, with no hidden fees or surprises.
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
              Our systems-built approach to housing allows us to build your
              dream home quickly and efficiently, while still maintaining high
              quality standards and attention to detail.
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
              Build your home with us and experience the joy of a stress-free
              construction process. We are committed to delivering a beautiful,
              custom-built home that exceeds your expectations, while providing
              exceptional customer service along the way.
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
