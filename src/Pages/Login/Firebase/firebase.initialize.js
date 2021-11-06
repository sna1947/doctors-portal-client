// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthencation =()=>{
    initializeApp(firebaseConfig);
}  
export default initializeAuthencation;
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
