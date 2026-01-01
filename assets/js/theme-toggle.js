const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

// Load saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");

  if (current === "dark") {
    root.removeAttribute("data-theme");
    localStorage.removeItem("theme");
    toggleBtn.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  }
});
