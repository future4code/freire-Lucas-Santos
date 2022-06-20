import React from 'react';
import './index.css';
import { useState } from 'react';
import { OpenedQuestion } from '../Questions/OpenedQuestion'
import { SelectQuestion } from '../Questions/SelectQuestion'

export const Part1 = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userSchooling, setUserSchooling] = useState();

    return (
        <div className="Part1">
            <OpenedQuestion 
                question="Qual o seu nome?"
                value={userName}
            />

            <OpenedQuestion
                question="Qual a sua idade?"
                value={userAge}
            />

            <OpenedQuestion
                question="Qual o seu email?"
                value={userEmail}
            />

            <SelectQuestion
                question="Qual a sua escolaridade?"
                value={userSchooling}
                options={[
                    'Ensino médio incompleto', 
                    'Ensino médio completo', 
                    'Ensino superior incompleto', 
                    'Ensino superior completo'
                ]}
            />
        </div>
    )
}