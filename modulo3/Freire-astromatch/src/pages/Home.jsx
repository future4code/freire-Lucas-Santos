import React, { useState, useEffect } from "react";
import axios from "axios";
import { Player } from '@lottiefiles/react-lottie-player';
import "./style-pages.css";

/*API*/
import { putClearMatchs, headers } from "../api/infos";

/*Icons*/
import { RiRefreshLine } from 'react-icons/ri';

export const Home = ({ profile, showNullProfile }) => {
    useEffect(() => {
        /*Controladores do style da página*/
        const home = document.querySelector(".home");
        const nullProfile = document.querySelector(".null-profile");
        
        if (showNullProfile) {
            home.style.marginTop = "-150vh";
            nullProfile.style.top = "0";          
        } 
        else if (profile && Object.keys(profile).length > 0) {
            home.style.marginTop = "0";
            nullProfile.style.top = "-150vh";
        }
    }, [profile])

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
        <div className="home">
            <div className="image-box">
                <img src={profile.photo} alt="Imagem da pessoa que o aplicativo está recomendando."/>
            </div>

            <div className="info-box">
                <strong>{profile.name}, {profile.age} anos</strong>
                <span>{profile.bio}</span>
            </div>

            <div className="null-profile">
                <h1>Os perfis disponíveis acabaram!</h1>

                <div>
                    <Player
                        className="lottie-player"
                        autoplay={true}
                        loop={true}
                        src="https://assets8.lottiefiles.com/packages/lf20_g4wqji2g.json"
                        style={{ width: "95%", height: "95%" }}
                    />
                </div>

                <h3>Clique para limpar a lista</h3>
                <h3>e reiniciar o aplicativo</h3>

                <br />

                <RiRefreshLine onClick={() => clearMatchs()}/>
            </div>
            
        </div>
    )
}