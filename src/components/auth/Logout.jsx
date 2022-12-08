import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth.slice';

const Logout = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(logout())}>Выйти</button>
        </div>
    );
};

export default Logout;