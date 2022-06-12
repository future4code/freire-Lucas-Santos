import React from 'react';
import './App.css';
import { useState } from 'react';
import { ChatScreen } from './components/ChatScreen/ChatScreen';

export const App = () => {
  return (
    <div className="App">
      <ChatScreen />
    </div>
  );
}