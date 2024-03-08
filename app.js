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
