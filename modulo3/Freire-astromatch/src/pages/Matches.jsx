import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style-pages.css";

/*API*/
import { putClearMatchs, headers } from "../api/infos";

/*Icons*/
import { RiRefreshLine } from "react-icons/ri";

export const Matches = ({ matchs }) => {
    /*Apaga a lista de matches da API*/
    const clearMatchs = async () => {
        if (window.confirm("Deseja apagar a lista de matches?")) {
            await axios.put(putClearMatchs, {}, headers)
            .then(response => {
                alert("Lista de matches apagada com sucesso.")
                window.location.reload()
            })
            .catch(error => {
                clearMatchs()
            })
        }        
    }

    return (
        <div className="matches">
            <div>
                <h1>Matchs</h1>

                <RiRefreshLine className="icon-delete" onClick={() => clearMatchs()}/>
            </div>

            <ul>
                {matchs.map(match => (
                    <li key={match.id}>
                        <div>
                            <img src={match.photo} alt={match.name} />
                        </div>
                        
                        <strong>{match.name}, {match.age} anos</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}