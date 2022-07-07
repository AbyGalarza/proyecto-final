// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo-oPup5TpR1zpcfSP6DXPloTFVcOgMp0",
  authDomain: "proyecto-final-810b9.firebaseapp.com",
  projectId: "proyecto-final-810b9",
  storageBucket: "proyecto-final-810b9.appspot.com",
  messagingSenderId: "882591687947",
  appId: "1:882591687947:web:583d5a524902d42b3c2e0e",
  measurementId: "G-D2D44GZMMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app)

export default db