ScrollReveal({
  origin: "left",
  duration: 2000,
  distance: "200px",
  reset: true,
}).reveal(".sLeft", {
  interval: 100,
});

ScrollReveal({
  origin: "right",
  duration: 2000,
  reset: true,
}).reveal(".sRight", {
  interval: 100,
});

ScrollReveal({
  origin: "bottom",
  duration: 1500,
  // distance: "0",
  scale: 0.75,
  reset: true,
}).reveal(".sBottom", {
  interval: 100,
});

ScrollReveal({
  origin: "top",
  duration: 2000,
  reset: true,
}).reveal(".sTop", {
  interval: 100,
});
