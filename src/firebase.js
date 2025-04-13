import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBM8AoNsmHlIUsfU18a7E-P2EnH_Alm7IE",
  authDomain: "react-firebase-ea58e.firebaseapp.com",
  projectId: "react-firebase-ea58e",
  storageBucket: "react-firebase-ea58e.firebasestorage.app",
  messagingSenderId: "380744579058",
  appId: "1:380744579058:web:8017fe523fae9d4f071d6b",
  measurementId: "G-K4C53PTSXG"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
