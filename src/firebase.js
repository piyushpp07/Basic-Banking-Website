import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAQqm8RiOAI137S614Zp4FrFoFuk84XBk4",
    authDomain: "basic-banking-system-fb9fc.firebaseapp.com",
    databaseURL: "https://basic-banking-system-fb9fc-default-rtdb.firebaseio.com",
    projectId: "basic-banking-system-fb9fc",
    storageBucket: "basic-banking-system-fb9fc.appspot.com",
    messagingSenderId: "1055966070885",
    appId: "1:1055966070885:web:03b0d0660476d843f09e8c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };