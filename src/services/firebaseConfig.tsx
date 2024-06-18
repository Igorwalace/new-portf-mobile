import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAny8fXp1PPm0804lyYWeZUIHfqguhJXRI",
    authDomain: "meu-portfolio-igor.firebaseapp.com",
    projectId: "meu-portfolio-igor",
    storageBucket: "meu-portfolio-igor.appspot.com",
    messagingSenderId: "639293673883",
    appId: "1:639293673883:web:676410fc5c29dd29a1113e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);