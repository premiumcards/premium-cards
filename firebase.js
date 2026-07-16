import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "re_L7hyNPSv_NbSokrHXJ21wi1vSfNASbWL1",
  authDomain: "otp-for-card-web.firebaseapp.com",
  projectId: "otp-for-card-web",
  storageBucket: "otp-for-card-web.firebasestorage.app",
  messagingSenderId: "1056735807696",
  appId: "1:1056735807696:web:3c60cf4e6d71c1562c36d5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
