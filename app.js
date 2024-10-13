var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentNode;
    const currentlyActive = document.querySelector(".faq-item.active");
    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove("active");
      currentlyActive
        .querySelector(".faq-question>img")
        .classList.remove("rotate-arrow");
    }

    question.querySelector("img").classList.toggle("rotate-arrow");
    item.classList.toggle("active");
  });
});

document.querySelectorAll(".faq-answer img").forEach((img) => {
  img.addEventListener("click", () => {
    const item = img.closest(".faq-item");
    const currentlyActive = document.querySelector(".faq-item.active");

    if (currentlyActive) {
      currentlyActive.classList.remove("active");
      currentlyActive
        .querySelector(".faq-question>img")
        .classList.remove("rotate-arrow");
    }

    item.classList.remove("active");
  });
});

document.querySelectorAll(".faq-answer").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentNode;
    const currentlyActive = document.querySelector(".faq-item.active");
    if (currentlyActive && currentlyActive === item) {
      document
        .querySelector(".faq-item>.faq-question>img")
        .classList.remove("rotate-arrow");
      currentlyActive.classList.remove("active");
    }

    item.classList.remove("active");
  });
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.from(".card", {
  y: -800,
  duration: 0.5,
  stagger: 0.3,
  ease: "ease",
});

gsap.to(".premium-h1-2", {
  right: 0,
  left: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=100",
    scrub: true,
    // markers: true,
  },
});

gsap.to(".premium-h1-1", {
  x: "-200%",
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=100",
    scrub: 2,
    // markers: true,
  },
});
gsap.to(".card", {
  x: (index) => -index * 400,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 0%",
    end: "+=1200",
    scrub: 2,
    pin: true,
    // markers: true,
  },
});

const splittedLettors = document
  .querySelector(".scroll-fill-text")
  .innerText.split("");

document.querySelector(".scroll-fill-text").innerText = "";
splittedLettors.map(
  (lettor) =>
    (document.querySelector(
      ".scroll-fill-text"
    ).innerHTML += `<span class="split-lettor">${lettor}</span>`)
);

gsap.to(".split-lettor", {
  color: "black",
  scrollTrigger: {
    trigger: ".about",
    start: "top 50%",
    end: "top 15%",
    scrub: 1,
    // markers: true
  },
  stagger: 1,
});

const splittedLettors2 = document
  .querySelector(".scroll-fill-text-2")
  .innerText.split("");

document.querySelector(".scroll-fill-text-2").innerText = "";
splittedLettors2.map(
  (lettor) =>
    (document.querySelector(
      ".scroll-fill-text-2"
    ).innerHTML += `<span class="split-lettor-2">${lettor}</span>`)
);

gsap.to(".split-lettor-2", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 0%",
    end: "top 0%",
    scrub: 2,
  },
  stagger: 0.3,
  ease: "ease",
});

gsap.to(".sticky-video", {
  maxWidth: "100%",
  scrollTrigger: {
    trigger: ".video",
    start: "top 75%",
    end: "top 30%",
    // markers: true,
    scrub: 2,
  },
});

gsap.to(".process-steps", {
  x: "-75%",
  scrollTrigger: {
    trigger: ".process",
    start: "top 0%",
    end: "+=1000",
    scrub: 2,
    pin: true,
    // markers: true
  },
  ease: "power1.out",
});

document.querySelector(".go-up").addEventListener("click", () => {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 1 }); // {{ edit_1 }}
});

const text = " CHAT US ON WHATSAPP";
const textCircle = document.getElementById("text-circle");
const characters = text.split("");
const degree = 360 / characters.length;

characters.forEach((char, i) => {
  const span = document.createElement("span");
  span.innerText = char;
  span.style.transform = `rotate(${i * degree}deg)`;
  textCircle.appendChild(span);
});

gsap.to('.text-circle span', {
  paddingTop: 15,
  stagger: 0.1,
  yoyo: -1,
  repeat: -1,
  delay:3,
  repeatDelay:3
})

gsap.to('.text-circle span', {
  color: "white",
  scrollTrigger: {
    trigger : ".get-started",
    start: "top 25%",
    end: "top 50%",
    // markers: 1,
    scrub: 1
  }
})
