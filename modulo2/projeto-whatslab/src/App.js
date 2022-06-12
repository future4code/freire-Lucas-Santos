import React from 'react';
import './App.css';
import { useState } from 'react';
import {InputBox} from './components/Input/InputBox';
import {ChatList} from './components/Messages/Chat/ChatList';
import {UserName} from './components/User/UserName';

export const App = () => {
  const [user, setUser] = useState('');
  const [list, setList] = useState([]);

  function saveNewMessage(message) {
    let newList = [...list];
    newList.push(message);
    setList(newList);
  }

  function saveNewUser(user) {
    setUser(user);
  }

  return (
    <div className="App">
      <header>
        <input
          type="text"
          placeholder='Digite o nome do usuário...'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </header>

      <section>
        <ChatList list={list} user={user}/>
      </section>

      <footer>
        <InputBox onAddMessage={saveNewMessage} />
      </footer>
    </div>
  );
}