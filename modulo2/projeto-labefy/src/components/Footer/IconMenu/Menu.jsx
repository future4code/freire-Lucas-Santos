import React from "react";
import { useState } from "react";
import './Menu.css';

/*Icons*/
import { RiHome5Line, RiSearch2Line, RiMusic2Line, RiUser3Line } from "react-icons/ri";
import { RiHome5Fill, RiSearch2Fill, RiMusic2Fill, RiUser3Fill } from "react-icons/ri";

export const Menu = ({ selected, setSelected }) => {

    /*Faz o radio button mudar de item selecionado*/
    const handleClick = (index) => {
        setSelected(index);
    }

    /*onChange para mudar o ícone do menu*/
    const handleChange = (e) => {
        setSelected(e.target.value);
    }

    return (
        <div className="menu">
            <input
                type="radio" 
                name="icon-menu" 
                id="home-input" 
                value="home"
                checked={selected === "home"}
                onClick={() => handleClick("home")}
                onChange={handleChange}
            />
            <label htmlFor="home-input">
                <RiHome5Line className="home-line"/>
                <RiHome5Fill className="home-fill"/>
            </label>

            <input 
                type="radio" 
                name="icon-menu" 
                id="search-input" 
                value="search"
                checked={selected === "search"}
                onClick={() => handleClick("search")}    
                onChange={handleChange}
            />
            <label htmlFor="search-input">
                <RiSearch2Line className="search-line"/>
                <RiSearch2Fill className="search-fill"/>
            </label>

            <input 
                type="radio"   
                name="icon-menu" 
                id="music-input" 
                value="music"
                checked={selected === "music"}
                onClick={() => handleClick("music")}    
                onChange={handleChange}
            />
            <label htmlFor="music-input">
                <RiMusic2Line className="music-line"/>
                <RiMusic2Fill className="music-fill"/>
            </label>

            <input 
                type="radio" 
                name="icon-menu" 
                id="user-input" 
                value="user"
                checked={selected === "user"}
                onClick={() => handleClick("user")}
                onChange={handleChange}
            />
            <label htmlFor="user-input">
                <RiUser3Line className="user-line"/>
                <RiUser3Fill className="user-fill"/>
            </label>
        </div>
    );
}