// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ3qUwkJPLMDSSM9qJs_eVVG3a9rFtY1A",
  authDomain: "detodo-store.firebaseapp.com",
  projectId: "detodo-store",
  storageBucket: "detodo-store.appspot.com",
  messagingSenderId: "1032030327692",
  appId: "1:1032030327692:web:b11d2c073cb53641d4bca9"
};

// Initialize and export Firebase
export default function firebaseConnect(){
    return (initializeApp(firebaseConfig))
}