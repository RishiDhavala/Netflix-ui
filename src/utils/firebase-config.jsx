
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjs3YPy8vWdX-xHvWF53NXNmFzAKjTOnY",
  authDomain: "react-netflix-clone-4444d.firebaseapp.com",
  projectId: "react-netflix-clone-4444d",
  storageBucket: "react-netflix-clone-4444d.appspot.com",
  messagingSenderId: "599035665920",
  appId: "1:599035665920:web:6b935fed77ea49a4c6c2e5",
  measurementId: "G-TYV0JWS1LK"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);