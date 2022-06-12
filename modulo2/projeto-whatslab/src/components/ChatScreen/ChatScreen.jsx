import React from "react";
import './ChatScreen.css';
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { UserMessage } from "../UserMessage/UserMessage";

export const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [time, setTime] = useState('');

    /*Salva o nome do usuário e a mensagem digitada na lista de mensagens*/
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessages([...messages, { name: userName, message, time: getTime() }]);
        setMessage('');
    }

    /*Função que recebe data e hora atual do sistema e retorna a data e hora formatada*/
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

    return (
        <div className="ChatScreen">
            <header>
                <input
                    type="text"
                    placeholder='Digite o nome do usuário...'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </header>

            <section>
                <div className="chat-list">
                    <ul>               
                        <li>
                            {messages.map((message, index) => (
                                <UserMessage key={index} user={message.name} time={message.time} message={message.message}/>
                            ))}
                        </li>
                    </ul>
                </div>
            </section>

            <footer>
                <div className='input-box'>
                    <div>
                        <textarea 
                            type="text" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button onClick={handleSubmit}><BiSend /></button>
                </div>
            </footer>
        </div>
    );
}