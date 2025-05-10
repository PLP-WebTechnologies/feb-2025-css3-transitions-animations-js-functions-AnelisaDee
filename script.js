const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const greeting = document.getElementById("greeting");

// Load stored username on page load
window.onload = () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    greeting.textContent = `Welcome back, ${savedUser}!`;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = document.getElementById("password").value;

  // Simulate login logic
  if (username && password) {
    // Store username in localStorage
    localStorage.setItem("username", username);

    // Show greeting with animation
    greeting.textContent = `Welcome, ${username}!`;
    greeting.style.animation = "fadeIn 0.5s ease";

    // Clear form
    form.reset();
  } else {
    alert("Please enter username and password.");
  }
});
