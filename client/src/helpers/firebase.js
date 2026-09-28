import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getEnv } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnv("VITE_FIREBASE_API"),
  authDomain: "mern-blog-2b99a.firebaseapp.com",
  projectId: "mern-blog-2b99a",
  storageBucket: "mern-blog-2b99a.firebasestorage.app",
  messagingSenderId: "248644048395",
  appId: "1:248644048395:web:6842c4a894c0648f27d90e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
