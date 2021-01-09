import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCXd-dydsmoQJmWN4Vxj0u0rsB53ItM1JE",
    authDomain: "linkedin-clone-3ea3e.firebaseapp.com",
    projectId: "linkedin-clone-3ea3e",
    storageBucket: "linkedin-clone-3ea3e.appspot.com",
    messagingSenderId: "381505421710",
    appId: "1:381505421710:web:c42165fddacd4d1f4d64df",
    measurementId: "G-S9K4MGJE8R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export default firebaseApp;
export { db, auth };
