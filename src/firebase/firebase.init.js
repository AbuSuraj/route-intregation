// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgEPAmcWBwQgg5Gu7vq5uw_-9HGDDDQ7c",
  authDomain: "auth-route-context-f600f.firebaseapp.com",
  projectId: "auth-route-context-f600f",
  storageBucket: "auth-route-context-f600f.appspot.com",
  messagingSenderId: "917995516076",
  appId: "1:917995516076:web:75187044525c1c3a75ef09",
  measurementId: "G-JSQ346TT0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;