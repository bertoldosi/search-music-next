import React from "react";

import styles from "./styles.module.scss";

function Historico() {
   const [history] = React.useState(() =>
      JSON.parse(localStorage.getItem("s-m-l-history"))
   );

   function handleClearHistory() {
      localStorage.clear();
      document.location.reload();
   }

   return (
      <div className={styles.Historico}>
         <div className={styles.HistoricoHeader}>
            <h1>HISTÓRICO</h1>
            <button onClick={handleClearHistory}>Apagar histórico</button>
         </div>
         {history?.map((item, index) => {
            return (
               <div key={index} className={styles.HistoricoContent}>
                  <h2>{item.term}</h2>
                  <span>{item.date}</span>
               </div>
            );
         })}
      </div>
   );
}

export default Historico;
