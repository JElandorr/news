import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQcQy7eRJYn5putW-4tKqiMJwPTzfrtw0",
    authDomain: "project-news-2ea55.firebaseapp.com",
    databaseURL: "https://project-news-2ea55-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-news-2ea55",
    storageBucket: "project-news-2ea55.appspot.com",
    messagingSenderId: "772069531607",
    appId: "1:772069531607:web:e2db18a5feaeb9de49f592",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const projectNewsFirestore = getFirestore(app);

// init auth service
const projectNewsAuth = getAuth(app);

export { projectNewsFirestore, projectNewsAuth };
