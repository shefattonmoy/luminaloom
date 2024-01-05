import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDh67V_alVoe9q5oPtyvldREAwKfQur64U",
  authDomain: "luminaloom-1fa12.firebaseapp.com",
  projectId: "luminaloom-1fa12",
  storageBucket: "luminaloom-1fa12.appspot.com",
  messagingSenderId: "848416889463",
  appId: "1:848416889463:web:922fb3c6f2c69165c68472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;