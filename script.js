// Hamburger Menu

const menuButton = document.getElementById("menuToggle");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const menuContent = document.getElementById("menuContent");
const loginIcon = document.getElementById("loginIcon");
const menuLinks = document.getElementsByClassName("menu-link");

menuButton.addEventListener("click", () => {
  menuOpen.classList.toggle("display-none");
  menuClose.classList.toggle("display-none");
  menuContent.classList.toggle("display-none");
  loginIcon.classList.toggle("display-none");
});

for (link of menuLinks) {
  link.addEventListener("click", () => {
    menuOpen.classList.toggle("display-none");
    menuClose.classList.toggle("display-none");
    menuContent.classList.toggle("display-none");
    loginIcon.classList.toggle("display-none");
  });
}
