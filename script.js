// SELETORES E VARIAVEIS
var modalConfig = document.querySelector('.modal-config-container');
var modalLinks = document.querySelector('.modal-links-container');
var seletorCores = document.querySelector('.cores-container');
var navbar = document.querySelector(".navbar");
var navBg = getComputedStyle(document.documentElement).getPropertyValue('--cor-bg-med'); 
var shadow = getComputedStyle(document.documentElement).getPropertyValue('--box-shadow'); 

/*-------------------------------------------------------------------------------------------------*/
// ESCONDE/MOSTRA NAVBAR/MODALS SCROLL
window.onscroll = function() {

  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.backgroundColor = `rgba(${navBg},1)`;
    navbar.style.boxShadow = `${shadow}`;
  }

  if (window.pageYOffset > 500) {
    modalLinks.classList.add('hidden');
    modalConfig.classList.add('hidden');
  }
} 
/*-------------------------------------------------------------------------------------------------*/
// ABRE MODAL LINKS
function abreModalLink() {
  window.scrollTo(0, 0);

  if (!modalConfig.classList.contains('hidden')) {
    modalConfig.classList.toggle('hidden');
  }
  
  modalLinks.classList.toggle('hidden');
}
// FECHA MODAL LINKS
function fechaModalLink() {
  
  if (!modalLinks.classList.contains('hidden')) {
    modalLinks.classList.toggle('hidden');
  }
}
/*-------------------------------------------------------------------------------------------------*/
// ABRE MODAL CONFIG
function abreModalConfig() {
  window.scrollTo(0, 0);

  if (!modalLinks.classList.contains('hidden')) {
  modalLinks.classList.toggle('hidden');
  }
 
  modalConfig.classList.toggle('hidden');
}
// FECHA MODAL CONFIG
function fechaModalConfig() {

  if (!modalConfig.classList.contains('hidden')) {
    modalConfig.classList.toggle('hidden');
  }
}
/*-------------------------------------------------------------------------------------------------*/
// SELECIONA COR TEMA
seletorCores.addEventListener('click', function (el) {
  var i = el.target.getAttribute('data-cor');
  getComputedStyle(document.documentElement).getPropertyValue(`--cor-${i}`);
  getComputedStyle(document.documentElement).getPropertyValue(`--svg-${i}`);
  document.documentElement.style.setProperty('--cor-tema', `var(--cor-${i})`);
  document.documentElement.style.setProperty('--cor-icones-svg', `var(--svg-${i})`);
  modalConfig.classList.toggle('hidden');
});









/*-------------------------------------------------------------------------------------------------*/
// SCROLL REVAL
/*-------------------------------------------------------------------------------------------------*/

const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 1000,
    reset: true
});

sr.reveal(`.section-title`, {
    interval: 100
})
/*-------------------------------------------------------------------------------------------------*/