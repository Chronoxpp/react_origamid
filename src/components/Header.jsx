import React from "react";
import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import Dogs from "./../Assets/dogs.svg?react";

export default function Header()
{
  return (
    <header className={styles.Header}>
      <nav className={`${styles.Nav} Container`}>
        <Link to="/" className={styles.Logo} aria-label="Dogs - Home"><Dogs /></Link>
        <Link to="/login" className={styles.Login} >Login / Criar</Link>
      </nav>
    </header>
  );
}