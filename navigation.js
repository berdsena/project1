// Mobile Navigation

const menuButton = document.getElementById("menuToggle");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const menuContent = document.getElementById("menuContent");
const loginIconStart = document.getElementById("loginIconStart");
const loginIconMenu = document.getElementById("loginIconMenu");
const menuLinks = document.getElementsByClassName("menu-link");

// menu opens and closes when clicking the burger or X

menuButton.addEventListener("click", () => {
  menuOpen.classList.toggle("display-none");
  menuClose.classList.toggle("display-none");
  menuContent.classList.toggle("display-none");
  loginIconStart.classList.toggle("display-none");
});

// menu closes when a link is clicked

for (link of menuLinks) {
  link.addEventListener("click", () => {
    menuOpen.classList.toggle("display-none");
    menuClose.classList.toggle("display-none");
    menuContent.classList.toggle("display-none");
    loginIconStart.classList.toggle("display-none");
  });
}

// menuButton appears when scrolling down, loginIcon disappears

document.addEventListener("scroll", () => {
  if(window.scrollY > 150) {
    menuButton.classList.remove("opacity-zero");
    loginIconStart.classList.add("opacity-zero");
    // we can't have a transition for display none, that's why first the opacity gets animated, and after that come the display none, which is important so the items don't get accidentally clicked
    window.setTimeout(() => {
      menuButton.classList.remove("display-none");
      loginIconStart.classList.add("display-none");
    }, 400);
  } else {
    menuButton.classList.add("opacity-zero");
    loginIconStart.classList.remove("opacity-zero");
    // same as above
    window.setTimeout(() => {
      menuButton.classList.add("display-none");
    loginIconStart.classList.remove("display-none");
    }, 400);
  }
})
