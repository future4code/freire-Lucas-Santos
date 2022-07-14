import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style-MatchUnmatch.css";

/*Lottie*/
import { Player } from '@lottiefiles/react-lottie-player';

/*API*/
import { headers, postChoice } from '../../api/infos'

/*Icons*/
import { RiHeart3Fill, RiCloseFill } from "react-icons/ri";

export const MatchUnmatch = ({ profile, page, triggerNewProfile, setTriggerNewProfile, showButtons, setShowButtons }) => {
    /*Anima o aparecer dos botões e controla se eles estão visíveis ou não*/
    useEffect(() => {
        const matchIcon = document.querySelector(".match-icon")
        const unmatchIcon = document.querySelector(".unmatch-icon")
        const lottie = document.querySelector(".lottie-player")

        if (showButtons) {
            matchIcon.style.transform = "translateX(0)"
            unmatchIcon.style.transform = "translateX(0)"
            lottie.style.opacity = "0"
        } 
        else if (!showButtons) {
            matchIcon.style.transform = "translateX(110%)"
            unmatchIcon.style.transform = "translateX(-110%)"
            lottie.style.opacity = "1"
        }
    }, [showButtons])

    /*Envia a decisão de match ou não para a API*/
    const sendChoiceToAPI = async (id, choice) => {
        await axios.post(postChoice, {
            id,
            choice
        }, headers)
        .then(response => {
            setTriggerNewProfile(triggerNewProfile + 1)
        })
        .catch(error => {
            window.location.reload()
        })
    }

    /*Anima os botões quando eles são clicados*/
    const handleChoice = (choice) => {
        setShowButtons(false)

        sendChoiceToAPI(profile.id, choice)
    }
    
    return (
        <div className="buttons-box">
            <RiCloseFill className="unmatch-icon" onClick={() => handleChoice(false)}/>

            <Player
                className="lottie-player"
                autoplay={true}
                loop={true}
                src="https://assets6.lottiefiles.com/packages/lf20_bzibm35c.json"
                style={{ height: "50vh", transition: "all 0.4s" }}
            />

            <RiHeart3Fill className="match-icon" onClick={() => handleChoice(true)}/>      
        </div>            
    )
}