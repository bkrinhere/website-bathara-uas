// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika ini menu di klik
document.querySelector("#ini-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar untuk menghilangkan nav
const menu = document.querySelector("#ini-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
