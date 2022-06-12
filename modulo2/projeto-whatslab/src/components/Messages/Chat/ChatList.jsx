import React, {Component} from 'react';
import './ChatList.css';
import {UserMessage } from '../MessageOnly/UserMessage';

export const ChatList = ({list},{user}) => {
    function getTime() {
        const d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let hour = d.getHours();
        let minute = d.getMinutes();

        if (minute.toString().length === 1) {
            minute = '0' + minute;
        }
        if (hour.toString().length === 1) {
            hour = '0' + hour;
        }
        if (day.toString().length === 1) {
            day = '0' + day;
        }
        if (month.toString().length === 1) {
            month = '0' + month;
        }

        return `${day}/${month}/${year} - ${hour}:${minute}`;
    }

    const timeFormated = getTime();

    return (
        <div className="chat-list">
            <ul>               
                <li>
                    {list.map((message, index) => (
                        <UserMessage key={index} user={message.user} time={timeFormated} message={message.message}/>
                    ))}
                </li>
            </ul>
        </div>
    );
}