// link with API ScrollReveal
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1800,
  delay: 100,
});

ScrollReveal().reveal(".main-title", { origin: "left", delay: 500 });
ScrollReveal().reveal(".work .container .box", {
  origin: "bottom",
  delay: 200,
});
ScrollReveal().reveal(".about .imge img, .about .text, .services .box .click", {
  origin: "top",
  delay: 100,
});
ScrollReveal().reveal(".clinet .box, .skill .the-progress span", {
  origin: "left",
  delay: 10,
  interval: 200,
});
ScrollReveal().reveal(".call .box", {
  origin: "bottom",
  delay: 100,
  scale: 0.85,
});

ScrollReveal().reveal(".contact-us .box h2, .maps .box, .progress .box .info", {
  origin: "left",
  delay: 100,
  scale: 0.9,
});
