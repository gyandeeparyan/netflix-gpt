// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxxvNh4SvFdj_NwN812z9WuCf3IRGiHyo",
  authDomain: "netflix-gpt-c3d0e.firebaseapp.com",
  projectId: "netflix-gpt-c3d0e",
  storageBucket: "netflix-gpt-c3d0e.appspot.com",
  messagingSenderId: "642255265093",
  appId: "1:642255265093:web:bc36df3b3b9dddb9bef22c",
  measurementId: "G-S2E73QM66E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();