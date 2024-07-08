// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsQCBYCVr9cLNTt_QhHyqgLtEpQZJazG0",
  authDomain: "really-22d61.firebaseapp.com",
  projectId: "really-22d61",
  storageBucket: "really-22d61.appspot.com",
  messagingSenderId: "1067694807018",
  appId: "1:1067694807018:web:0b7ba3a76a8c436b76c493",
  measurementId: "G-MBSC7YMCF6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db= getFirestore();