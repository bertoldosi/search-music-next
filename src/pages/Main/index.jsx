import React from "react";

import styles from "./styles.module.scss";

import Search from "../../components/Search";
import Resultado from "../../components/Resultado";

const Main = () => {
   return (
      <div className={styles.Main}>
         <Search />
         <Resultado resultado={[]} />
      </div>
   );
};

export default Main;
