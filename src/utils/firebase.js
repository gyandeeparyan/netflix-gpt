// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,
  authDomain: "movie-suggestion-db264.firebaseapp.com",
  projectId: "movie-suggestion-db264",
  storageBucket: "movie-suggestion-db264.appspot.com",
  messagingSenderId: "244955304523",
  appId: "1:244955304523:web:7df9196e1157af4e11f3ce",
  measurementId: "G-YJGZRZDR9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();