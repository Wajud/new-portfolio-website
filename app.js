//Get my age

document.getElementById("age").textContent = new Date().getFullYear() - 1998;

//Get the year
document.getElementById("year").textContent = new Date().getFullYear();

//Active State on all nav links

const navLinks = document.querySelectorAll("aside nav li a");
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    //  e.preventDefault();
    navLinks.forEach((navLink) => {
      navLink.classList.remove("text-green-300");
    });
    navLink.classList.add("text-green-300");
  })
);

//Dropdown

const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;

const mobileNavContainer = document.getElementById("mobile-nav");
mobileNavContainer.classList.add(`top-[${headerHeight}px]`);

const mobileNav = document.querySelector("#mobile-nav ul");

const menuControls = document.getElementById("menu-controls");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

mobileNav.classList.add("top-[-400px]");
openMenu.addEventListener("click", () => {
  openMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  if (mobileNav.classList.contains("slide-out")) {
    mobileNav.classList.replace("slide-out", "slide-in");
  } else {
    mobileNav.classList.add("slide-in");
  }

  mobileNav.classList.remove("top-[-400px]");
});

closeMenu.addEventListener("click", () => {
  dragMenuUp();
});

function dragMenuUp() {
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
  mobileNav.classList.replace("slide-in", "slide-out");
}

const mobileNavLinks = document.querySelectorAll("#mobile-nav li");
mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", dragMenuUp);
});

//Scroll to Top Arrow Functionality

const arrowUp = document.getElementById("arrow-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    arrowUp.classList.replace("hidden", "block");
  } else {
    arrowUp.classList.replace("block", "hidden");
  }
});

//End of Scroll to Top Arrow Functionality
