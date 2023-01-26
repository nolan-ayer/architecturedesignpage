import styles from "./VIP.module.css";

const VIP = ({ name, title }) => {
  return (
    <article className={styles.nameContainer}>
      <h4>{name}</h4>
      <p className="align-center">{title}</p>
    </article>
  );
};

export default VIP;
