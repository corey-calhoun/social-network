import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header.js/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/widgets/Widgets';
import { auth } from './firebase';
import { logout, login, selectUser } from './helpers/userSlice'

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: user?.photoUrl || '',
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);


  return (
    <div className="app">
      <Header />

      {!user ? ( <Login /> ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}

      
    </div>
  );
}

export default App;
