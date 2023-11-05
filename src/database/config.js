import { initializeApp } from "@firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDesLwYsjJ91ijEfRZDzs49Xi1TbGthx_E",
  authDomain: "trenser-afb97.firebaseapp.com",
  projectId: "trenser-afb97",
  storageBucket: "trenser-afb97.appspot.com",
  messagingSenderId: "862948896415",
  appId: "1:862948896415:web:20988c2acf919fb846fcaa",
  measurementId: "G-4WPHDF8KWP",
  databaseURL: "https://trenser-afb97-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);

