// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc5OCgRVQdNnnFZ6sDfFqhKUSBuU_j4DE",
  authDomain: "movieflixgpt-2be49.firebaseapp.com",
  projectId: "movieflixgpt-2be49",
  storageBucket: "movieflixgpt-2be49.appspot.com",
  messagingSenderId: "1063070216924",
  appId: "1:1063070216924:web:3dd959bdba6819124a3a19",
  measurementId: "G-N9SDM944DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);