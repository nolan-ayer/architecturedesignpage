import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const HomeTile = ({
  bannerPrimary,
  bannerSecondary,
  linkTo,
  img,
  textHeader,
  textBodyOne,
  textBodyTwo,
  textBodyThree,
}) => {
  const alt = "A commercial construction by ModArch Design Co.";
  return (
    <>
      <div className={styles.banner}>
        <img className={styles.bannerImage} alt={alt} src={img} />
        <div className={styles.bannerTextContainer}>
          <h2 className={styles.bannerTextPrimary}>{bannerPrimary}</h2>
          <Link to={linkTo} className={styles.bannerTextSecondary}>
            <h5>{bannerSecondary}</h5>
          </Link>
        </div>
      </div>
      <div className="align-center">
        <div className="padded">
          {textHeader && <h3 className="friendlyText">{textHeader}</h3>}
          {textBodyOne && <h5 className="friendlyText">{textBodyOne}</h5>}
          {textBodyTwo && <h5 className="friendlyText">{textBodyTwo}</h5>}
          {textBodyThree && <h5 className="friendlyText">{textBodyThree}</h5>}
        </div>
      </div>
    </>
  );
};

export default HomeTile;
