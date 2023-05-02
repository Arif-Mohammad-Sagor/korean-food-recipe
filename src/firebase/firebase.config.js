// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaR7snNW_44G-oCt-2JfCMXQstMzSDUXs",
  authDomain: "koritaste-food.firebaseapp.com",
  projectId: "koritaste-food",
  storageBucket: "koritaste-food.appspot.com",
  messagingSenderId: "569358463379",
  appId: "1:569358463379:web:524a86f2bbe6630258f866",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;