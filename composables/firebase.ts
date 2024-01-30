// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDVz8wZLAJx-PlEF3OOj8NO2M60dB2gl8U",
  authDomain: "mattress-7a34d.firebaseapp.com",
  projectId: "mattress-7a34d",
  storageBucket: "mattress-7a34d.appspot.com",
  messagingSenderId: "431976009326",
  appId: "1:431976009326:web:d70aabfb7960fee14ce07f",
  measurementId: "G-2QLCT1XZS6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const $firebase = (option?: any) => {
  return { app };
};
