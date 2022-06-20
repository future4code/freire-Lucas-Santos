import React from 'react';
import './index.css';
import { useState } from 'react';

export const SelectQuestion = (props) => {
    const [userSelected, setUserSelected] = useState(props.value);

    return (
        <div className="select-question">
            <label htmlFor="">
                <select defaultValue={userSelected} onChange={(e) => setUserSelected(e.target.value)}>
                    <option value="default" disable="true" hidden>{props.question}</option>
                    {props.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}