import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../helpers/userSlice'
import './Login.css';
import logo from '../../img/LinkedIn_logo.svg';
import { auth } from '../../firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const register = () => {
        if(!name) {
            return alert('Please enter your name');
        } 

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePic,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic
                    }));
                })
            }
        )
    };

    const logIntoApp = (e) => {
        e.preventDefault();

    };

    return (
        <div className="login">
                <img src={logo} alt="" />
                <form>
                    <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text" 
                        placeholder="Full name (required for registrationi)" 
                        required
                    />
                    <input 
                        value={profilePic}
                        onChange={e => setProfilePic(e.target.value)}
                        type="text" 
                        placeholder="Profile pic URL (optional)" 
                    />
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Enter your email address..." 
                        required 
                    />
                    <input 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password" 
                        placeholder="Enter your password" 
                        required
                    />
                    <button 
                        type="submit" 
                        onClick={logIntoApp}
                    >Sign In</button>
                </form>

                <p>Not a member?{" "}
                    <span className="login__register" onClick={register}>Register Now</span>
                </p>
        </div>
    )
}

export default Login
