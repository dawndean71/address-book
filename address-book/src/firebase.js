import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // these are all of the keys we need
    apiKey: "AIzaSyA__xxgUt3sFvPsqqdOvbFQ4I4uXkp_6Hc",
    authDomain: "address-book-24c0f.firebaseapp.com",
    projectId: "address-book-24c0f",
    storageBucket: "address-book-24c0f.appspot.com",
    messagingSenderId: "148028707396",
    appId: "1:148028707396:web:dd3ec3173dffa59199e211",
    measurementId: "G-XZP10Q1F0E"
   
});

// auth sets up authentication
const auth = firebaseApp.auth();

export { auth };
