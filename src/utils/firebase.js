// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBofmYldZZXHaYlp-49bWDuMNWN7Cvyfuk",
  authDomain: "netflix-gpt-6e00d.firebaseapp.com",
  projectId: "netflix-gpt-6e00d",
  storageBucket: "netflix-gpt-6e00d.firebasestorage.app",
  messagingSenderId: "955673389739",
  appId: "1:955673389739:web:7d7df0ee1c93fee164e5ee",
  measurementId: "G-ZRLPP87M0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);