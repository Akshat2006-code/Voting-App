import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBxfD-en4Sr8FNAYagufHbatF29K5rp4-w",
    authDomain: "voting-app-19479.firebaseapp.com",
    databaseURL: "https://voting-app-19479-default-rtdb.firebaseio.com",
    projectId: "voting-app-19479",
    storageBucket: "voting-app-19479.appspot.com",
    messagingSenderId: "851963895392",
    appId: "1:851963895392:web:fee42d435c3dad06d8ed05"
  };
var firebaseConfig = {initializeApp};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();