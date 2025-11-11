// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA63XSehUyhR6dap_BYItv4vV8qpP2IuE4",
  authDomain: "netflixgpt-4190e.firebaseapp.com",
  projectId: "netflixgpt-4190e",
  storageBucket: "netflixgpt-4190e.firebasestorage.app",
  messagingSenderId: "449411040690",
  appId: "1:449411040690:web:622cd574163dbaa52dd0ab",
  measurementId: "G-2ZVKHJE1WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
