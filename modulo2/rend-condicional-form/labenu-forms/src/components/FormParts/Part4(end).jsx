import React from 'react';
import './index.css';
import { SuccessAnimation } from '../Animations/SuccessAnimation';

export const Part4 = ({ }) => {
    return (
        <div className="Part4">
            <h1>Obrigado por constribuir com essa pesquisa!</h1>
            <br />
            <h3>Suas respostas serão muito úteis para o nosso trabalho.</h3>
            <br />
            <SuccessAnimation />            
        </div>
    )
}