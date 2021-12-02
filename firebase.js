// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYlIMjfoUttEtvlZMKKMcF6i85ouvulpA",
  authDomain: "insta-clone-2-5beb1.firebaseapp.com",
  projectId: "insta-clone-2-5beb1",
  storageBucket: "insta-clone-2-5beb1.appspot.com",
  messagingSenderId: "800173675953",
  appId: "1:800173675953:web:438c23428b97239cf9d990",
  measurementId: "G-CSM6KRZ3PL",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { db, app, storage };
