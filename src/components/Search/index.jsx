import React from "react";
import api from "../../services/api";

import styles from "./styles.module.scss";

import Resultado from "../Resultado";

const initialStateRequest = {
   success: false,
   error: false,
   response: [],
};

const initialStateForm = {
   typeSearch: "artist",
   valueSearch: "",
};

const Search = () => {
   const [request, setRequest] = React.useState(initialStateRequest);
   const [valueInput, setValue] = React.useState(initialStateForm);

   const handleInputChange = (event) => {
      const { name, value } = event.target;

      setValue((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const savingHistory = () => {
      const history = JSON.parse(localStorage.getItem("s-m-l-history"));
      const currentDate = new Date().toLocaleString("pt-BR");

      const newHistory = {
         term: valueInput.valueSearch,
         date: currentDate,
      };

      if (!!history) {
         history.push(newHistory);
         localStorage.setItem("s-m-l-history", JSON.stringify(history));
      } else {
         localStorage.setItem("s-m-l-history", JSON.stringify([newHistory]));
      }
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      savingHistory();

      const typeSearch = valueInput.typeSearch;
      const nameSearch = valueInput.valueSearch;

      try {
         const response =
            typeSearch === "artist"
               ? await api.get("/?method=artist.search", {
                    params: {
                       artist: nameSearch,
                       format: "json",
                    },
                 })
               : await api.get("/?method=album.search", {
                    params: {
                       album: nameSearch,
                       format: "json",
                    },
                 });

         setRequest({
            success: true,
            error: false,
            response:
               typeSearch === "artist"
                  ? response.data.results.artistmatches.artist
                  : response.data.results.albummatches.album,
         });
      } catch (error) {
         console.log("error", error);
         setRequest({
            success: false,
            error: true,
            response: [],
         });
      }
   };

   const cleanSearch = () => {
      setValue(initialStateForm);
      document.location.reload();
   };

   return (
      <>
         <div className={styles.Search}>
            <div className={styles.SearchTitle}>
               Pesquisando por
               <select
                  name="typeSearch"
                  id="typeSearch"
                  type="text"
                  onChange={handleInputChange}
                  value={valueInput.typeSearch}
               >
                  <option value="artist">Artista</option>
                  <option value="album">Album</option>
               </select>
            </div>
            <form className={styles.SearchForm} onSubmit={handleSubmit}>
               <label htmlFor="valueSearch" />
               <input
                  name="valueSearch"
                  id="valueSearch"
                  type="text"
                  value={valueInput.valueSearch}
                  onChange={handleInputChange}
                  placeholder="Digite o nome"
                  required
               />

               <div className={styles.SearchFormButton}>
                  <button type="submit">Buscar</button>
                  <button type="button" onClick={cleanSearch}>
                     Limpar
                  </button>
               </div>
            </form>
         </div>
         <Resultado resultado={request.response} />
      </>
   );
};

export default Search;
