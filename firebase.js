// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

// Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
