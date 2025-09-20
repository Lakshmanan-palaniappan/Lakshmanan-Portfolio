const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

const styleSwitcher = document.getElementById("style-switcher"),
  switcherToggle = document.getElementById("switcher-toggle"),
  switcherClose = document.getElementById("switcher-close");

switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");
    colors.forEach((c) => {
      c.classList.remove("active-color");
    });
    color.classList.add("active-color");
    document.documentElement.style.setProperty("--hue", activeColor);
  };
});

let currentTheme = "light";

document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
  });
});

var servicesSwiper = new Swiper(".services-swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

document.querySelectorAll(".skills-item").forEach((item) => {
  const value = item
    .querySelector(".skills-value")
    .innerText.replace("%", "")
    .trim();
  item.querySelector(".skills-percentage").style.width = value + "%";
});

var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

const accordionItems = document.querySelectorAll(".resume-item");

accordionItems.forEach((item) => {
  const resumeHeader = item.querySelector(".resume-header");
  const content = item.querySelector(".resume-content");
  const icon = item.querySelector(".resume-icon i");
  resumeHeader.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open");
    content.style.height = isOpen ? content.scrollHeight + "px" : "0px";
    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line";

    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordion-open")
      ) {
        otherItem.classList.remove("accordion-open");
        otherItem.querySelector(".resume-content").style.height = "0px";
        otherItem.querySelector(".resume-icon i").className = "ri-add-line";
      }
    });
  });
});

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactSubject = document.getElementById("contact-subject"),
  contactMessage = document.getElementById("contact-message"),
  contactTime = document.getElementById("contact-time"),
  message = document.getElementById("message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    message.classList.add("color-red");
    message.textContent = "Write all the input fields";
    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    // set time dynamically
    contactTime.value = new Date().toLocaleString();

    emailjs.sendForm(
      "service_3b906pi",
      "template_8kt1r6e",
      "#contact-form",
      "KtNylYgRr571hgERf"
    ).then(
      () => {
        message.classList.remove("color-red");
        message.classList.add("color-first");
        message.textContent = "Message sent";

        setTimeout(() => {
          message.textContent = "";
        }, 5000);

        // clear form
        contactName.value = "";
        contactEmail.value = "";
        contactSubject.value = "";
        contactMessage.value = "";
      },
      (error) => {
        alert("OOPS! SOMETHING HAS FAILED...", error);
      }
    );
  }
};

contactForm.addEventListener("submit", sendEmail);


const scrollHeader=()=>{
  const header=document.getElementById("bg-header");
  this.scrollY>=20?header.classList.add("bg-header"):header.classList.remove("bg-header");
}

window.addEventListener("scroll",scrollHeader);


const navLink=document.querySelectorAll(".nav-link");

const linkAction=()=>{
  const navMenu=document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("animate-toggle");
} 

navLink.forEach(n=>n.addEventListener("click",linkAction));

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    console.log("Checking section:", sectionId, "ScrollY:", scrollY, "Top:", sectionTop, "Bottom:", sectionTop + sectionHeight);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);


const certificatesSwiper = new Swiper('.certificates-swiper', {
  slidesPerView: 'auto',   // scrollable horizontally
  spaceBetween: 30,        // spacing between big cards
  grabCursor: true,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

