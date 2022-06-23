// SELETORES E VARIAVEIS



// ESCONDE/MOSTRA NAVBAR/MODALS SCROLL
window.onscroll = function() {
  var navbar = document.querySelector(".navbar");
  var navBg = getComputedStyle(document.documentElement).getPropertyValue('--cor-bg-10'); 
  var shadow = getComputedStyle(document.documentElement).getPropertyValue('--box-shadow'); 
  var modalLinks = document.querySelector('.modal-links-container');

  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.backgroundColor = `rgba(${navBg},1)`;
    navbar.style.boxShadow = `${shadow}`;
  }

} 

// ABRE MODAL LINKS
function abreModalLink() {
  window.scrollTo(0, 0);
  var modalLinks = document.querySelector('.modal-links-container');
  var pos = `${window.scrollY}`;
  modalLinks.style.top = `calc(${pos}px + 20px)`;  
  modalLinks.classList.toggle('hidden');
}
// FECHA MODAL LINKS
function fechaModalLink() {
  var modalLinks = document.querySelector('.modal-links-container');
  if (!modalLinks.classList.contains('hidden')) {
    modalLinks.classList.toggle('hidden');
  }
}
