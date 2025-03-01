import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBF94i9yIeFAGpbs7WJ9mu5tMk_cGPkH-s",
  authDomain: "speakers-45dc2.firebaseapp.com",
  projectId: "speakers-45dc2",
  storageBucket: "speakers-45dc2.firebasestorage.app",
  messagingSenderId: "191750278758",
  appId: "1:191750278758:web:82ec5afdf18e078c4867a7",
  databaseURL: 'https://speakers-45dc2-default-rtdb.firebaseio.com/'
};

const apps = getApps();
export const app = !apps.length ? initializeApp(firebaseConfig) : apps[0];