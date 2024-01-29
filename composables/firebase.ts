// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDDrfPS6zGEXvdEySyLATwIG0iZpQO59YA",
  authDomain: "faster-5dd74.firebaseapp.com",
  databaseURL: "https://faster-5dd74.firebaseio.com",
  projectId: "faster-5dd74",
  storageBucket: "faster-5dd74.appspot.com",
  messagingSenderId: "947945457722",
  appId: "1:947945457722:web:372bfb601a2b7dd64f4d03",
  measurementId: "G-KZ12NG251T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const $firebase = (option?: any) => {
  return { app };
};
