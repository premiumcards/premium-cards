import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// अगर पहले से Login है तो Dashboard पर भेजो
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const button = document.querySelector(".login-btn");

  button.disabled = true;
  button.innerHTML = "Logging in...";

  try {

    await signInWithEmailAndPassword(auth, email, password);

    alert("Login Successful");

    window.location.href = "dashboard.html";

  } catch (error) {

    alert(error.message);

  } finally {

    button.disabled = false;
    button.innerHTML = "Login";

  }

});
