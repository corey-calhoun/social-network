import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header.js/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* right widget sidebar */}
      </div>
        
    </div>
  );
}

export default App;
