

// ESCONDE/MOSTRA NAVBAR SCROLL
window.onscroll = function() {
var navbar = document.querySelector(".navbar");
var navBg = getComputedStyle(document.documentElement).getPropertyValue('--cor-bg-10'); 

  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.backgroundColor = `rgba(${navBg},1)`;
  }

} 