import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCY9YjkGoW__gPCKNItOJuOJz8HF2sxMMw",
    authDomain: "movienest-81fa8.firebaseapp.com",
    projectId: "movienest-81fa8",
    storageBucket: "movienest-81fa8.firebasestorage.app",
    messagingSenderId: "441882131151",
    appId: "1:441882131151:web:30ba30fad351c87a8895ba",
    measurementId: "G-KLQ9GRDV3K"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);