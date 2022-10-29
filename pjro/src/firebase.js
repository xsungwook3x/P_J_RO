// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDksypGFvHJTOuc5MZesw7FfZKe1b8GRX8",
    authDomain: "pjro-250f0.firebaseapp.com",
    projectId: "pjro-250f0",
    storageBucket: "pjro-250f0.appspot.com",
    messagingSenderId: "370262839632",
    appId: "1:370262839632:web:293041a00b0c30aa93dc55",
    measurementId: "G-NKH2VZVPEE"
};

export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);


