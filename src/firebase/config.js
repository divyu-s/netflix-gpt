// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDsRWZQdyEDEj49rb4OQwX3iAtLDWsAk0",
  authDomain: "netflix-gpt-a6ce7.firebaseapp.com",
  projectId: "netflix-gpt-a6ce7",
  storageBucket: "netflix-gpt-a6ce7.appspot.com",
  messagingSenderId: "923568402731",
  appId: "1:923568402731:web:56cde59ab221d4b683556e",
  measurementId: "G-RDFBQHY1PJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
