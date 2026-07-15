import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Elements
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// Check Login
onAuthStateChanged(auth, (user) => {

    if (user) {

        const name = user.displayName || "Premium User";

        userName.textContent = name;
        userEmail.textContent = user.email;

    } else {

        window.location.href = "login.html";

    }

});

// Logout
logoutBtn.addEventListener("click", async () => {

    const ok = confirm("Do you want to logout?");

    if (!ok) return;

    await signOut(auth);

    window.location.href = "login.html";

});
