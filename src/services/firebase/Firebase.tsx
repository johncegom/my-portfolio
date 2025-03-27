// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTHoYNraumNcT3bfgwqSrPDrIUxtP4GUI",
  authDomain: "my-portfolio-3d706.firebaseapp.com",
  projectId: "my-portfolio-3d706",
  storageBucket: "my-portfolio-3d706.appspot.com",
  messagingSenderId: "159615989054",
  appId: "1:159615989054:web:654193c75e4d00e6b7e86f",
  measurementId: "G-V13X00TCF8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
