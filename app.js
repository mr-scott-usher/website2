const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
const demoLogin = document.getElementById("demoLogin");
const seeApp = document.getElementById("seeApp");
const contactBtn = document.getElementById("contactBtn");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

demoLogin.addEventListener("click", () => {
  alert("Demo mode: sample student view with check-in, schedule, and messages.");
});

seeApp.addEventListener("click", () => {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  alert("Thanks! A OneCampus specialist will reach out within 1 business day.");
});