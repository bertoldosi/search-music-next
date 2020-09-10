import React from 'react'
import './historico.css'

import { useHistory } from "react-router-dom";




function Historico() {

    const savedHistory = Object.entries(localStorage);
    const history = useHistory();

    function handleClearHistory() {
        localStorage.clear();
        history.push("/historico");
      }

    return (
        <div className='historico'>
            <div className='header'>
                <h1>HISTÓRICO</h1>
                <button onClick={handleClearHistory} >Apagar histórico</button>
            </div>
            {savedHistory.map(item => {
                return (
                    <div className='content-historico'>
                        <div className='historico-search'>
                            <h2>{item[1]}</h2>
                            <p>
                                {new Date(parseInt(item[0])).toLocaleDateString("pt-BR")} -{" "}
                                {new Date(parseInt(item[0])).toLocaleTimeString("pt-BR")}
                            </p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Historico;