import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [enteredName, setEnteredName] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const enteredPhoneNumber = useRef(null);
  const enteredDetails = useRef(null);
  const enteredNote = useRef(null);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const resetHandler = () => {
    setEnteredName("");
    setEnteredCompany("");
    setEnteredEmail("");
    enteredPhoneNumber.current.value = null;
    enteredDetails.current.value = null;
    enteredNote.current.value = null;
  };

  async function postData() {
    const formData = {
      name: enteredName,
      company: enteredCompany,
      email: enteredEmail,
      phone: enteredPhoneNumber.current.value,
      details: enteredDetails.current.value,
      note: enteredNote.current.value,
    };
    const response = await fetch(
      `https://dnd-tracker-d4735-default-rtdb.firebaseio.com/workInquiries.json`,
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await response.json();
    if (response.ok) {
      alert(
        "Thank you for contacting me - I'll be reaching out to you shortly!"
      );
    } else {
      alert(
        "Something seems to have gone wrong. Please reload the page and try again."
      );
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredName || !enteredCompany || !enteredEmail) {
      alert("Please fill out all entries marked by an asterisk*");
    } else {
      postData();
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
        <p>
          To talk business, please fill out the form below and I will get back
          to you at my earliest convenience.
        </p>
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
          <label>Company Name *</label>
          <input
            className={styles.inputField}
            value={enteredCompany}
            onChange={companyChangeHandler}
          />
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
          <label>Job Title/Brief Description</label>
          <input className={styles.inputField} ref={enteredDetails} />
        </span>
        <span className={styles.inputContainer}>
          <label>{`Notes (tell me about your team, company, etc)`}</label>
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
