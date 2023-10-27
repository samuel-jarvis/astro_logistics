import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// use timestamp from firebase
import { Timestamp } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDyDcN22csOkgsEGnCTb0ajOcazgi_l7Kc",
  authDomain: "astrologistics-6e292.firebaseapp.com",
  projectId: "astrologistics-6e292",
  storageBucket: "astrologistics-6e292.appspot.com",
  messagingSenderId: "13436436603",
  appId: "1:13436436603:web:24ea8a6b1110f1d280e2de"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// init services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, storage, auth };
