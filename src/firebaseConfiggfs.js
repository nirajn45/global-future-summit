import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsmBjxisOT_5TJmOqHNEWW2qVqFDancJg",
  authDomain: "summit-5920c.firebaseapp.com",
  databaseURL: "https://summit-5920c-default-rtdb.firebaseio.com",
  projectId: "summit-5920c",
  storageBucket: "summit-5920c.firebasestorage.app",
  messagingSenderId: "114728998958",
  appId: "1:114728998958:web:c8717b24009e161dbc67bf"
};

export const app = initializeApp(firebaseConfig);