import React from 'react';
import './index.css';
import { useState } from 'react';
import { OpenedQuestion } from '../Questions/OpenedQuestion'
import { SelectQuestion } from '../Questions/SelectQuestion'

export const Part3 = ({ }) => {
    const [userWhyNotGraduate, setUserWhyNotGraduate] = useState('');
    const [userOtherCourse, setUserOtherCourse] = useState('');

    return (
        <div className="Part3">
            <OpenedQuestion
                question="Por que você não terminou seu curso?"
                value={userWhyNotGraduate}
            />

            <SelectQuestion
                question="Já fez algum curso complementar?"
                value={userOtherCourse}
                options={[
                    'Curso Técnico',
                    'Curso de Inglês',
                    'Não fiz nenhum curso complementar'
                ]}
            />          
        </div>
    )
}