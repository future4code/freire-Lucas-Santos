import React, { useEffect } from "react";
import "./style-pages.css";

export const Home = ({ profile, showButtons }) => {
    useEffect(() => {
        const home = document.querySelector(".home");

        if (showButtons) {
            home.style.transform = "translateY(0)";
        }
        else {
            home.style.transform = "translateY(-100vh)";
        }
    })

    return (
        <div className="home">
            <div className="image-box">
                <img src={profile.photo} alt="Imagem da pessoa que o aplicativo está recomendando."/>
            </div>

            <div className="info-box">
                <strong>{profile.name}, {profile.age} anos</strong>
                <span>{profile.bio}</span>
            </div>      
        </div>
    )
}