import React from 'react';
import './index.css';
import { useState } from 'react';
import { OpenedQuestion } from '../Questions/OpenedQuestion'

export const Part2 = ({ }) => {
    const [userCourse, setUserCourse] = useState('');
    const [userCourseUniversity, setUserCourseUniversity] = useState('');

    return (
        <div className="Part2">
            <OpenedQuestion
                question="Qual o seu curso?"
                value={userCourse}
            />

            <OpenedQuestion
                question="Qual a sua universidade?"
                value={userCourseUniversity}
            />
        </div>
    )
}