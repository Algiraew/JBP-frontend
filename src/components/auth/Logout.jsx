import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth.slice';
import styles from './loginForm.module.css'

const Logout = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.logout}>
            <button onClick={() => dispatch(logout())}>Выйти</button>
        </div>
    );
};

export default Logout;