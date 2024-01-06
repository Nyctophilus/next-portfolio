import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDFbNLC4C7eFRdoYnktefm3kzZ4LwfUHU0",
  authDomain: "portfolio-84e83.firebaseapp.com",
  projectId: "portfolio-84e83",
  storageBucket: "portfolio-84e83.appspot.com",
  messagingSenderId: "949905787667",
  appId: "1:949905787667:web:25d8462537512199b5e8e6",
  databaseURL:
    "https://portfolio-84e83-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const firebase = getDatabase(app);

export default firebase;
