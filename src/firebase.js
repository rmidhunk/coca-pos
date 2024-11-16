import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-cF0nDQw6DAOXCclINDeDNeZUvQVcM3o",
  authDomain: "coca-pos-d033a.firebaseapp.com",
  projectId: "coca-pos-d033a",
  storageBucket: "coca-pos-d033a.firebasestorage.app",
  messagingSenderId: "428369903603",
  appId: "1:428369903603:web:390e4f289423821100dc86",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
