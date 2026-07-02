const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");
const root = document.documentElement;

const preferredTheme = localStorage.getItem("theme");

function setThemeButton(mode) {
  const isDark = mode === "dark";
  themeIcon.textContent = isDark ? "L" : "D";
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

if (preferredTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  setThemeButton("dark");
} else {
  setThemeButton("light");
}

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    setThemeButton("light");
    return;
  }

  root.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
  setThemeButton("dark");
});
