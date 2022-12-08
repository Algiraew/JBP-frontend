import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../features/auth.slice";

export const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const dispatch = useDispatch();

  const { loadng, token, error } = useSelector((state) => state.auth);

  const handleSetFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassowrd = (e) => {
    setPasswordHash(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registration({ fullName, email, passwordHash }))
  }

  return (
    <form className={styles.form}>
      <h1 className={styles.registr_item}>Registration</h1>
      <div>
        <input
          className={styles.form_input}
          type="text"
          value={fullName}
          onChange={(e) => handleSetFullName(e)}
        />
      </div>
      <div>
        <input
          className={styles.form_input}
          type="text"
          value={email}
          onChange={(e) => handleSetEmail(e)}
        />
      </div>
      <div>
        <input
          className={styles.form_input}
          type="password"
          value={passwordHash}
          onChange={(e) => handleSetPassowrd(e)}
        />
      </div>
      <button className={styles.reg_btn} onClick={handleSubmit}>Зарегистрироваться</button>
    </form>
  );
};
