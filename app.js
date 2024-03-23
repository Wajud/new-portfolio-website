//Get my age

document.getElementById("age").textContent = new Date().getFullYear() - 1998;

//Get the year
document.getElementById("year").textContent = new Date().getFullYear();

//Active State on all nav links

const navLinks = document.querySelectorAll("aside nav li a");
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
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

//Color Switcher Sliding Functionality

const settings = document.getElementById("settings");
const themesContainer = document.getElementById("themes-container");

settings.addEventListener("click", () => {
  if (themesContainer.classList.contains("-right-[150px]")) {
    themesContainer.classList.replace("-right-[150px]", "right-0");
  } else {
    themesContainer.classList.replace("right-0", "-right-[150px]");
  }
});

//Themes Color Picking

// let defaultThemes = "green-500";

const bgThemesUser = document.querySelectorAll(".bg-themesColor");
const textThemesUser = document.querySelectorAll(".text-themesColor");
const hireMeTheme = document.querySelector(".hire-me-theme");

const themesPicker = document.querySelectorAll("p[data-theme]");
themesPicker.forEach((picker) =>
  picker.addEventListener("click", () => {
    const currentbgColor = `${picker.dataset.theme}`;
    bgThemesUser.forEach((user) => {
      user.setAttribute("style", `background-color: ${currentbgColor};`);
    });

    textThemesUser.forEach((text) => {
      text.setAttribute("style", `color: ${currentbgColor};`);
    });

    hireMeTheme.setAttribute(
      "style",
      `border-color: ${currentbgColor}; color:${currentbgColor}; `
    );
  })
);

//EmailJS

// emailjs.init({
//   publicKey: "UHOdW4kGc_ITaANY2",
// });

// function sendMail() {
//   let params = {
//     name: document.getElementById("senderName").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs.send("service_ispv3mb", "template_bhruiig", params).then(
//     (response) => {
//       console.log("SUCCESS!", response.status, response.text);
//     },
//     (error) => {
//       console.log("FAILED...", error);
//     }
//   );
// }

// const emailForm = document.getElementById("messageForm");
// emailForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   sendMail();
//   emailForm.reset();
// });

//Counting on Scroll

const holders = document.querySelectorAll("[data-end]");
const third = document.getElementById("third-counter");

window.addEventListener("scroll", () => {
  if (
    window.scrollY > third.getBoundingClientRect().top &&
    window.scrollY < third.getBoundingClientRect().bottom
  ) {
    holders.forEach((holder) => {
      let start = 0;
      let end = parseInt(holder.getAttribute("data-end"));
      let counter = setInterval(() => {
        start++;
        holder.textContent = start;

        if (start == end) {
          clearInterval(counter);
        }
      }, 80);
    });
  }
});
