import React from "react";
import './Navbar.css';

export const Navbar = ({setSelected}) => {
    const handleClick = (e) => {
        setSelected(e.target.id);     
    }

    return (
        <div className="nav-bar">
            <input type="radio" id="do" name="option" onChange={handleClick} />
            <label htmlFor="do" className="do-selected">A FAZER</label>
            
            <input type="radio" id="doing" name="option" onChange={handleClick} />
            <label htmlFor="doing" className="doing-selected">FAZENDO</label>

            <input type="radio" id="done" name="option" onChange={handleClick}/>
            <label htmlFor="done" className="done-selected">FEITOS</label>
        </div>
    );
}