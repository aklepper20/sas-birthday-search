import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlXPn1NmMw56ge9AJuzgRgmk0Vgy1F0ac",
  authDomain: "sas-birthday-search.firebaseapp.com",
  projectId: "sas-birthday-search",
  storageBucket: "sas-birthday-search.appspot.com",
  messagingSenderId: "450795622224",
  appId: "1:450795622224:web:937964ebc8b88bfc79e655",
};

export const app = initializeApp(firebaseConfig);

const db = getFirestore();
