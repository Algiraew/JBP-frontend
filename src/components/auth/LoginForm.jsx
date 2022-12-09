import React, { useState } from "react";
import styles from "./loginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth.slice";


export const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const dispatch = useDispatch();

  const { loading, token, error } = useSelector((state) => state.auth);

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPasswordHash(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, passwordHash }));
  };

  return (
    <form className={styles.form}>
        <h1 className={styles.login_item}>Авторизация</h1>
      <div>
        <input
          className={styles.form_input}
          type="text"
          placeholder="login"
          value={email}
          onChange={(e) => handleSetEmail(e)}
        />
      </div>
      <div>
        <input
          className={styles.form_input}
          type="password"
          value={passwordHash}
          placeholder="password"
          onChange={(e) => handleSetPassword(e)}
        />
      </div>
      <button className={styles.reg_btn} onClick={handleSubmit}>ВОЙТИ</button>
    </form>
  );
};
