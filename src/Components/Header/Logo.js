import styles from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Logo() {
    return (
        <NavLink className={styles.header__box_logo} to="/Index">
            <div className={styles.header__img_log} />
        </NavLink>
    )
}
