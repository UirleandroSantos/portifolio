import React from 'react';
import styles from './Header.module.css';
import { Button } from '../button/Button';

import { Link } from 'react-router-dom';

export function Header(){
    return(
        <header className={styles.header}>
            <Link to={'/'} className={styles.buttonHome}>Home</Link>
            <ul className={styles.links}>
                <a className={styles.linkProjects}>Projects</a>
                <Link to={'/contacts'} className={styles.button}>
                    <Button content='Contact' />
                </Link> 
            </ul>
        </header>
    )
}