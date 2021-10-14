import React from "react";

import styles from "./styles.module.scss";

const Resultado = ({ resultado }) => {
   return (
      <div className={styles.Resultado} key={resultado.id}>
         {resultado.map((art) => {
            return (
               <div className={styles.ResultadoContent} key={art.url}>
                  <a href={art.url} target="blank">
                     <img
                        src={
                           art.image[2]["#text"]
                              ? art.image[1]["#text"]
                              : "https://via.placeholder.com/64"
                        }
                        alt="imagem"
                     />
                  </a>
                  <a href={art.url} target="blank">
                     <div className={styles.ResultadoContentInfo}>
                        <h2>{art.name}</h2>
                     </div>
                  </a>
               </div>
            );
         })}
      </div>
   );
};

export default Resultado;
