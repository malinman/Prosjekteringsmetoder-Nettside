// Sett årstall i footer
document.getElementById("year").textContent = new Date().getFullYear();

// En enkel hendelse
document.getElementById("trykkMeg").addEventListener("click", () => {
  alert("Du trykket på knappen! 🎉");
});
