import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFTGizXznAxNpixRIyDJGx9e4-uUpMchE",
  authDomain: "week7-gxchen.firebaseapp.com",
  projectId: "week7-gxchen",
  storageBucket: "week7-gxchen.firebasestorage.app",
  messagingSenderId: "500519066233",
  appId: "1:500519066233:web:50c31625ea072930b152a8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
