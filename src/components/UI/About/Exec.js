import styles from "./About.module.css";

const Exec = ({ name, title, img }) => {
  const alt = "Friendly face of someone working at Fake Company";
  return (
    <div>
      <img className={styles.portraitImage} src={img} alt={alt} />
      <article className={styles.nameContainer}>
        <h4>{name}</h4>
        <p className="align-center">{title}</p>
      </article>
    </div>
  );
};

export default Exec;
