// Import the functions you need from the SDKs you need
import "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBB7lj8gOP58D4qiEQPJbGrrlZjAFmXTw",
  authDomain: "shop-js39.firebaseapp.com",
  projectId: "shop-js39",
  storageBucket: "shop-js39.appspot.com",
  messagingSenderId: "1058824607944",
  appId: "1:1058824607944:web:42dd67138de57512462dfd",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
