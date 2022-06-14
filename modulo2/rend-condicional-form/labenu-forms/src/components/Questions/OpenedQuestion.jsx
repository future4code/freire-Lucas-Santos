import React from 'react';
import './index.css';
import { useState } from 'react';

export const OpenedQuestion = (props) => {
    const [userText, setUserText] = useState(props.value);

    return (
        <div className="Question">
            <label htmlFor="">
                <input 
                    type="text"
                    placeholder={props.question}
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                />
            </label>
        </div>
    )
}