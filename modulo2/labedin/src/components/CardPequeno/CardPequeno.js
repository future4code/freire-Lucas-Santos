import React from 'react';
import './CardPequeno.css'

function CardGrande(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;