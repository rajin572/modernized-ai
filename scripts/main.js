document.getElementById("navbar-toggle").addEventListener("click", function () {
  var navbarLinks = document.querySelector(".navbar-links");
  navbarLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
