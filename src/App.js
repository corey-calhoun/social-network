import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header.js/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { selectUser } from './helpers/userSlice'

function App() {

  const user = useSelector(selectUser)


  return (
    <div className="app">
      <Header />

      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* right widget sidebar */}
        </div>
      )}

      
    </div>
  );
}

export default App;
