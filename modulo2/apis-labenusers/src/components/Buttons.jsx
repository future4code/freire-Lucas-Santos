import React from "react";

export const Buttons = ({ setBtnOption}) => {
    return (
        <div className="buttons">
            <input 
                type="radio" 
                name="btn-login-cadastro" 
                value="login"
                id="btn-login" 
                onClick={() => setBtnOption("login")}
            />
            <label htmlFor="btn-login">Login</label>
            
            <input 
                type="radio" 
                name="btn-login-cadastro" 
                id="btn-cadastro" 
                value="cadastro"
                onClick={() => setBtnOption("cadastro")}
            />
            <label htmlFor="btn-cadastro">Cadastro</label>
            
        </div>
    )
}