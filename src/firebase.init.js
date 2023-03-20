// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Qn-RIDVthwP3kRiEyb9OANE7qZlldvU",
  authDomain: "iiucbook.firebaseapp.com",
  projectId: "iiucbook",
  storageBucket: "iiucbook.appspot.com",
  messagingSenderId: "907355181867",
  appId: "1:907355181867:web:492c63d395db4a48982b6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;