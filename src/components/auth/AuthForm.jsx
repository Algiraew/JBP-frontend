import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';
import styles from './Auth.module.scss'
import { useSelector } from 'react-redux';
import Logout from './Logout';

const AuthForm = () => {
    const { token } = useSelector((state) => state.auth);
    const [authReg, setAuthReg] = useState(false)
    const handleSwitch = () => {
        setAuthReg(!authReg)
    }
    return (
        <div className={styles.form}>
            {token && <Logout/>}
            {authReg ? <RegistrationForm/> : <LoginForm/>}
            {authReg ? <button className={styles.button} onClick={handleSwitch}>Авторизация</button> : <button className={styles.button} onClick={handleSwitch}>Регистрация</button>}
        </div>
    );
};

export default AuthForm;