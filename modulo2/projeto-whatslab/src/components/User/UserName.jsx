import './UserName.css';
import React, { Component } from 'react';
import { useState } from 'react';

export const UserName = ({onAddUser}) => {
    const [userName, setUserName] = useState('');

    function sendUserName () {
        const data = {
            userName
        }

        onAddUser(data);
    }

    return (
        <div className="user-name">
            
        </div>
    );
}