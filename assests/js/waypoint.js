var waypoint = new Waypoint({
  element: document.getElementById("services"),
  handler: function (direction) {
    let nav = document.getElementById("nav");
    if (direction === "down") {
      nav.classList.add("navbar-control", "animate__fadeInDown");
    } else {
      nav.classList.remove("navbar-control", "animate__fadeInDown");
    }
  },
  offset: "5%",
});
var waypointOne = new Waypoint({
  element: document.getElementById("portfolio"),
  handler: function (direction) {
    let toTop = document.getElementById("toTop");
    if (direction === "down") {
      toTop.classList.remove("d-none");
      toTop.classList.add("animate_fadeInRight");
    } else {
      toTop.classList.add("d-none");
      toTop.classList.remove("animate_fadeInRight");
    }
  },
  offset: "75%",
});
