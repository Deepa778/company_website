// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqftJMlLAZLoRt8xMlXii057-QuYEkee0",
  authDomain: "online-job-portal-6790d.firebaseapp.com",
  projectId: "online-job-portal-6790d",
  storageBucket: "online-job-portal-6790d.appspot.com",
  messagingSenderId: "145259280848",
  appId: "1:145259280848:web:ba9865246344f4c70da1d5",
  measurementId: "G-5FT5RWPD1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);