// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_-Z-LFC2MAp0t2JorblnlgkEO85FXwxs",
  authDomain: "banao2.firebaseapp.com",
  projectId: "banao2",
  storageBucket: "banao2.appspot.com",
  messagingSenderId: "946161935848",
  appId: "1:946161935848:web:5689369d6755be296f705d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;