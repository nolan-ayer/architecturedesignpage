import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const HomeTile = ({
  bannerPrimary,
  bannerSecondary,
  linkTo,
  img,
  textBodyOne,
  textBodyTwo,
}) => {
  const alt = "A commercial construction by Fake Company Name";
  return (
    <>
      <div className={styles.banner}>
        <img className={styles.bannerImage} alt={alt} src={img} />
        <div className={styles.bannerTextContainer}>
          <h4 className={styles.bannerTextPrimary}>{bannerPrimary}</h4>
          <Link to={linkTo} className={styles.bannerTextSecondary}>
            {bannerSecondary}
          </Link>
        </div>
      </div>
      <article className="padded">
        <p className="align-center">{textBodyOne}</p>
        <p className="align-center">{textBodyTwo}</p>
      </article>
    </>
  );
};

export default HomeTile;
