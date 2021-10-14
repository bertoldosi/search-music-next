import React from "react";

import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header className={styles.Header}>
         <div className={styles.HeaderLogo}>
            <h1>MUSIC</h1>
         </div>
         <nav className={styles.HeaderNavBar}>
            <Link to="/">Pesquisar</Link>
            <Link to="/historico">Histórico</Link>
         </nav>
      </header>
   );
};

export default Header;
