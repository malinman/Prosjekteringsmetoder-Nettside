// Set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple button action
const btn = document.getElementById("trykkMeg");
if (btn) {
  btn.addEventListener("click", () => {
    alert("Hei! Dette er bare en demo – men knappen funker 🎉");
  });
}

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Demo submit for Environmental Strategy form
const envForm = document.getElementById("env-form");
if (envForm) {
  envForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = envForm.querySelector(".form-status");
    status.hidden = false;
    status.textContent = "Takk! Meldingen er registrert (demo).";
    envForm.reset();
  });
}
