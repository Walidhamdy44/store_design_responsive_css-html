// link with API ScrollReveal
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1800,
  delay: 300,
});

ScrollReveal().reveal(".landing h2:nth-child(1)", {
  origin: "top",
  delay: 300,
  scale: 0.85,
});
ScrollReveal().reveal(".landing h2:nth-child(2)", {
  origin: "bottom",
  delay: 400,
  scale: 0.55,
});
ScrollReveal().reveal(".main-title", {
  origin: "bottom",
  delay: 500,
});

ScrollReveal().reveal(".clothes .box", {
  origin: "top",
  delay: 400,
  interval: 200,
});
ScrollReveal().reveal(".service .box", {
  origin: "left",
  delay: 400,
  interval: 200,
});
ScrollReveal().reveal(".owner .container .box", {
  origin: "bottom",
  delay: 600,
  interval: 300,
});
ScrollReveal().reveal(".deals", {
  origin: "top",
  delay: 600,
});
