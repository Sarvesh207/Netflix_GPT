// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAcRDOmCFMdLG5PYXpM2W-QsL0J0wlbzw",
  authDomain: "netflixgpt-de3b4.firebaseapp.com",
  projectId: "netflixgpt-de3b4",
  storageBucket: "netflixgpt-de3b4.appspot.com",
  messagingSenderId: "303310046559",
  appId: "1:303310046559:web:b0b34fecfbd183b058e2ea",
  measurementId: "G-FH5QTH216B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
