// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBzM1Zix8wPCkO9U_nNDsZdORo4OteOJM",
  authDomain: "mealmate-56625.firebaseapp.com",
  projectId: "mealmate-56625",
  storageBucket: "mealmate-56625.appspot.com",
  messagingSenderId: "248782732701",
  appId: "1:248782732701:web:7e77a68122cb1951204374",
  measurementId: "G-9S1YBWN3RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();