import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header()
{
    return (
        <nav className={styles.Header}>
            <ul>
                <li><NavLink className={styles.Link} to="/" end>Produtos</NavLink></li>
                <li><NavLink className={styles.Link} to="/contato">Contato</NavLink></li>
            </ul>
        </nav>
    );
}