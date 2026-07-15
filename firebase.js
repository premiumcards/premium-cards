// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdsl1ixAlpDTjMtpQCvN8yHlj2sHmJesY",
  authDomain: "premium-cards-380c2.firebaseapp.com",
  projectId: "premium-cards-380c2",
  storageBucket: "premium-cards-380c2.firebasestorage.app",
  messagingSenderId: "366925861411",
  appId: "1:366925861411:web:bcb88639698abe8fe8d796",
  measurementId: "G-GPPKYETTHC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
