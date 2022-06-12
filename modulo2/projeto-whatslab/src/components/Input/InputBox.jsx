import './InputBox.css';
import React, { Component } from 'react';
import { useState } from 'react';
import { BiSend } from "react-icons/bi";

export const InputBox = ({onAddMessage}) => {
    const [message, setMessage] = useState('');

    function sendMessage () {
        const data = {
            message
        }
        
        onAddMessage(data);

        setMessage('');
    }

    return (
        <div className='input-box'>
            <div>
                <textarea 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button onClick={sendMessage}><BiSend /></button>
        </div>
    )
}