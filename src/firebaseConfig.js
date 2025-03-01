import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCog8TT7E74FmPBOyNglw6qUwe2Ep4ccYA",
    authDomain: "ideate-9d9db.firebaseapp.com",
    projectId: "ideate-9d9db",
    storageBucket: "ideate-9d9db.firebasestorage.app",
    messagingSenderId: "227931596303",
    appId: "1:227931596303:web:17ffa4404d581b7677257a",
    databaseURL: 'https://ideate-9d9db-default-rtdb.firebaseio.com/'
};

export const app = initializeApp(firebaseConfig);
// const database = getDatabase(app)