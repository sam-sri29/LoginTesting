// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVVAUZ2nwCSdpmML4WYeomzWbCVCofzS4",
  authDomain: "logindemotesting.firebaseapp.com",
  projectId: "logindemotesting",
  storageBucket: "logindemotesting.firebasestorage.app",
  messagingSenderId: "730164817964",
  appId: "1:730164817964:web:9f55d2ab43965b7aeb6189",
  measurementId: "G-C6XHJDHQKZ"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)