//Get my age

// document.getElementById("age").textContent = new Date().getFullYear() - 1998;

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

//Contact us Functionality

const sendButton = document.querySelector("button#send-button");

const sendEmail = (e) => {
  e.preventDefault();
  const name = document.getElementById("name-field").value;
  const email = document.getElementById("email-field").value;
  const message = document.getElementById("message-field").value;
  const emailError = document.getElementById("email-error");
  const emailSuccess = document.getElementById("email-success");
  const sendingEmail = document.getElementById("sending-email");
  const contactForm = document.getElementById("contact-form");

  if (!email || !message) {
    console.log("Kindly add reply email and message");
    emailError.classList.remove("opacity-0");
    emailSuccess.classList.add("opacity-0");
    return;
  }

  emailError.classList.add("opacity-0");
  sendingEmail.classList.remove("opacity-0");
  const fetchParams = new URLSearchParams({
    name,
    senderEmail: email,
    phoneNumber: "***",
    message,
    recipientEmail: "kareemwajud@yahoo.com",
    subject: "New Mail from your PORTFOLIO website",
  });

  fetch(
    `https://main-node-mailer.onrender.com/contact-us?${fetchParams.toString()}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      sendingEmail.classList.add("opacity-0");
      emailSuccess.classList.remove("opacity-0");

      contactForm.reset();
      console.log("Mail sent!");

      setTimeout(() => emailSuccess.classList.add("opacity-0"), 3000);
    })
    .catch((err) => console.error(err));
};

sendButton.addEventListener("click", sendEmail);
