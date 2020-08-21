import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtYCEwV5m1SxdQHHnd9mf3nRaOst6cui8",
    authDomain: "instagram-clone-411b7.firebaseapp.com",
    databaseURL: "https://instagram-clone-411b7.firebaseio.com",
    projectId: "instagram-clone-411b7",
    storageBucket: "instagram-clone-411b7.appspot.com",
    messagingSenderId: "857530227954",
    appId: "1:857530227954:web:411ef225407b72346c846b",
    measurementId: "G-BBD0JWM47L"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };