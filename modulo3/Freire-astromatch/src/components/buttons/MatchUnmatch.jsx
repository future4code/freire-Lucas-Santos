import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style-MatchUnmatch.css";

/*API*/
import { headers, postChoice } from '../../api/infos'

/*Icons*/
import { RiHeart3Fill, RiCloseFill } from "react-icons/ri";

export const MatchUnmatch = ({ profile, page, triggerNewProfile, setTriggerNewProfile, showButtons }) => {
    useEffect(() => {
        const box = document.querySelector(".buttons-box");
        const match = document.querySelector(".match");
        const unmatch = document.querySelector(".unmatch");

        if (showButtons) {
            if (page === "home") {
                box.style.display = "flex";

                match.style.padding = "var(--padding-2) 0";
                match.style.paddingLeft = "var(--padding-1)";
                match.style.width = "64px";
                match.style.height = "100%";
                match.style.borderRadius = "var(--radius) 0 0 var(--radius)";

                unmatch.style.padding = "var(--padding-2) 0";
                unmatch.style.paddingRight = "var(--padding-1)";
                unmatch.style.width = "64px";
                unmatch.style.height = "100%";
                unmatch.style.borderRadius = "0 var(--radius) var(--radius) 0";
            } else {
                box.style.display = "none";
            }
            
        } else {
            match.style.padding = "0";
            match.style.width = "0";
            match.style.height = "0";

            unmatch.style.padding = "0";
            unmatch.style.width = "0";
            unmatch.style.height = "0";
        }
    }, [page,profile])

    const buttonAnimation = (choice) => {
        const match = document.querySelector(".match");
        const unmatch = document.querySelector(".unmatch");

        if (choice) {
            match.style.width = "100%";
            match.style.height = "150vh";
            match.style.borderRadius = "0";

            unmatch.style.width = "0";
            unmatch.style.padding = "0";
        } else {
            unmatch.style.width = "100%";
            unmatch.style.height = "150vh";
            unmatch.style.borderRadius = "0";

            match.style.width = "0";
            match.style.padding = "0";
        }
    }

    /*Envia a decisão de match ou não para a API*/
    const handleMatch = async (id, choice) => {
        buttonAnimation(choice)

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
    
    return (
        <div className="buttons-box">
            <RiCloseFill className="unmatch" onClick={() => handleMatch(profile.id, false)}/>
            <RiHeart3Fill className="match" onClick={() => handleMatch(profile.id, true)}/>
        </div>
    )
}