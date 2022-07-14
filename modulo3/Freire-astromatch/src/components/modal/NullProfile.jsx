import React, { useEffect } from "react";
import axios from "axios";
import "./style-NullProfile.css";

/*Lottie*/
import { Player } from '@lottiefiles/react-lottie-player';

/*API*/
import { putClearMatchs, headers } from "../../api/infos";

/*Icons*/
import { RiRefreshLine } from 'react-icons/ri';

export const NullProfile = ({ showNullProfile }) => {
    useEffect(() => {
        const nullProfile = document.querySelector(".null-profile")

        if (showNullProfile) {
            setTimeout(() => {
                nullProfile.style.transform = "translateY(0)"
            }, 200)
        }
    }, [showNullProfile])

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
        <div className="null-profile">
            <strong className="title">
                Os perfis disponíveis acabaram!
            </strong>

            <Player
                className="lottie-player"
                autoplay={true}
                loop={true}
                src="https://assets8.lottiefiles.com/packages/lf20_g4wqji2g.json"
                style={{ height: "50vh" }}
            />

            <strong className="text">
                Clique para limpar a lista
            </strong>
            <strong className="text">
                e reiniciar o aplicativo
            </strong>

            <br />

            <RiRefreshLine onClick={() => clearMatchs()}/>
        </div>
    )
}