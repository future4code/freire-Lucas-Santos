import React, { useEffect } from "react";
import "./style-NavFooter.css";

/*Icons*/
import { RiUser3Fill, RiHeartsFill } from "react-icons/ri";

export const NavFooter = ({ page, setPage }) => {
    useEffect(() => {
        const footer = document.querySelector(".footer");

        const profile = document.querySelector(".icon-profile");
        const matchs = document.querySelector(".icon-matchs");

        if (page === "home") {
            footer.style.boxShadow = "none";

            profile.style.fill = "var(--color-2)";
            profile.style.transform = "scale(1.2)";

            matchs.style.fill = "var(--color-1)";
            matchs.style.transform = "scale(1)";
        }
        else if (page === "matchs") {
            footer.style.boxShadow = "var(--shadow)";
            
            profile.style.fill = "var(--color-1)";
            profile.style.transform = "scale(1)";

            matchs.style.fill = "var(--color-2)";
            matchs.style.transform = "scale(1.2)";
        }
    })

    return (
        <footer className="footer">
            <div>
                <RiUser3Fill className="icon-profile" onClick={() => setPage("home")} />
            </div>

            <div>
                <RiHeartsFill className="icon-matchs" onClick={() => setPage("matchs")} />
            </div>
        </footer>
    )
}