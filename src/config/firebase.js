import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrD_rfnGINeFWTFdbbAXLSNj7Lh0v4h1c",
  authDomain: "fir-test-57d4a.firebaseapp.com",
  projectId: "fir-test-57d4a",
  storageBucket: "fir-test-57d4a.firebasestorage.app",
  messagingSenderId: "592097572278",
  appId: "1:592097572278:web:f14cea451e3ef6b77ffd17",
  measurementId: "G-1RE7BK0ZTW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
