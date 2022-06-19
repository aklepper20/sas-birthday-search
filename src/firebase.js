import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrI8lo6yNBZVVGnrs1RBNs78TEmBgyrnQ",
  authDomain: "birthday-search.firebaseapp.com",
  projectId: "birthday-search",
  storageBucket: "birthday-search.appspot.com",
  messagingSenderId: "1096919067457",
  appId: "1:1096919067457:web:5ee3476c117193d770cfc0",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
