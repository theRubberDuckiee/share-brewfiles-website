import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABm9M7XceFH6pSvvbMuRJw3n5nBeak3L0",
  authDomain: "share-brewfiles.firebaseapp.com",
  projectId: "share-brewfiles",
  storageBucket: "share-brewfiles.appspot.com",
  messagingSenderId: "1071283599196",
  appId: "1:1071283599196:web:a4910843f1bae76d7af399",
  measurementId: "G-WGD9RH2E7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize db
export const db = getFirestore(app);
