import { useRef, useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const enteredProjectLocation = useRef(null);
  const [enteredEmail, setEnteredEmail] = useState("");
  const enteredPhoneNumber = useRef(null);
  const enteredAddress = useRef(null);
  const enteredNote = useRef(null);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const resetHandler = () => {
    setEnteredName("");
    enteredProjectLocation.current.value = null;
    setEnteredEmail("");
    enteredPhoneNumber.current.value = null;
    enteredAddress.current.value = null;
    enteredNote.current.value = null;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredName || !enteredEmail) {
      alert("Please fill out all entries marked by an asterisk*");
    } else {
      //form submission
      resetHandler();
    }
  };

  return (
    <section className="padded">
      <article className={styles.contactArticle}>
        <p className="friendlyText">
          Making dummy sites is fun and all, but I'd rather be making real sites
          for you!
        </p>
        <p className="friendlyText">Email: FakeCompanyName@dontemailthis.com</p>
        <p className="friendlyText">{`Phone: 000-000-0000`}</p>
        <p>999 Some Street, #256</p>
        <p className="friendlyText">Some City, WA 00000</p>
      </article>
      <form className={styles.contactForm} onSubmit={submitHandler}>
        <span className={styles.inputContainer}>
          <label>Name *</label>
          <input
            className={styles.inputField}
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </span>
        <span className={styles.inputContainer}>
          <label>Project Location</label>
          <input className={styles.inputField} ref={enteredProjectLocation} />
        </span>
        <span className={styles.inputContainer}>
          <label>Email *</label>
          <input
            className={styles.inputField}
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </span>
        <span className={styles.inputContainer}>
          <label>Phone</label>
          <input className={styles.inputField} ref={enteredPhoneNumber} />
        </span>
        <span className={styles.inputContainer}>
          <label>{`Current Address (Include City, State, and ZIP)`}</label>
          <textarea className={styles.textField} ref={enteredAddress} />
        </span>
        <span className={styles.inputContainer}>
          <label>{`Notes (tell us about your project or inquiry)`}</label>
          <textarea className={styles.textField} ref={enteredNote} />
        </span>
        <nav className="submitButtonContainer">
          <button className="submitButton">{`> Submit`}</button>
        </nav>
      </form>
    </section>
  );
};

export default Contact;
