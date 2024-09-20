window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var logo = document.querySelector(".logo-container");
var sticky = logo.offsetTop + logo.offsetHeight;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
