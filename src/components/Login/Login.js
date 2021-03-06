import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../helpers/userSlice'
import './Login.css';
import logo from '../../img/logo.png';
import { auth } from '../../firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.user.uid,
                displayName: name,
                protoUrl: profilePic,
            }))
        })
        .catch(error => alert(error));
    };

    const register = () => {
        if(!name) {
            return alert('Please enter your name');
        } 

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
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
                });
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="login">
                <img src={logo} alt="" />
                <form>
                    <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text" 
                        placeholder="Full name (required for registration)" 
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
                        placeholder="Enter your email address" 
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
                        onClick={loginToApp}
                    >Sign In</button>
                </form>

                <p>Not a member?{" "}
                    <span className="login__register" onClick={register}>Register Now</span>
                </p>
        </div>
    )
}

export default Login
