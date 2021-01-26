import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
import GlobalStyles from './global-styles';

// import { seedDatabase } from "./seed";

const config = {
    apiKey: "AIzaSyAnwtdWzJIr12jiHIxjSIMiOi3gB0NJ-Ek",
    authDomain: "netflix-onja-noeline.firebaseapp.com",
    projectId: "netflix-onja-noeline",
    storageBucket: "netflix-onja-noeline.appspot.com",
    messagingSenderId: "563217788836",
    appId: "1:563217788836:web:f9ed8874619c978b1a1b31"
}

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, document.getElementById('root'));
