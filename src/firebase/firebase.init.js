// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1WAteec3DcQ37wWgii-LpuW9HDS3K_D0",
  authDomain: "route-intregation.firebaseapp.com",
  projectId: "route-intregation",
  storageBucket: "route-intregation.appspot.com",
  messagingSenderId: "824641215948",
  appId: "1:824641215948:web:c8c839a297b02a6b335169",
  measurementId: "G-ZVQ98BCPMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;