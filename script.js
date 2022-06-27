// SELETORES E VARIAVEIS
var body = document.querySelector('body');
var modalConfig = document.querySelector('.modal-config-container');
var modalLinks = document.querySelector('.modal-links-container');
var seletorCores = document.querySelector('.cores-container');
var navbar = document.querySelector(".navbar");
var navBg = getComputedStyle(document.documentElement).getPropertyValue('--cor-bg-med'); 
var shadow = getComputedStyle(document.documentElement).getPropertyValue('--box-shadow'); 
var iconeLogo = document.querySelector('.logo-svg');
var iconeConfig = document.querySelector('.conf-svg');
var container = document.querySelector('.flex-container');
var ulLinks = document.querySelector('.ul-container');
var navUlLinks = document.querySelector('.nav-ul-container');
var divContato = document.querySelector('.div-contato');
var imgSobre = document.querySelector('.img-sobre');

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
} 
/*-------------------------------------------------------------------------------------------------*/
// TRAVA SCROLLBAR
function travaScrollBars() {
    document.documentElement.style.overflow = 'hidden';
}
// DESTRAVA SCROLLBAR
function destravaScrollBars() {
    document.documentElement.style.overflow = 'auto';
}
/*-------------------------------------------------------------------------------------------------*/
// ABRE E FECHA MODAL LINKS
iconeLogo.addEventListener("click", function () {
    if (modalLinks.classList.contains('hidden')) {
      abreModalLink();
    } else {
      fechaModalLink();
    }
})
// --------------------------------------------------
function abreModalLink() {
  travaScrollBars();
  var top = window.scrollY + 90;
  modalLinks.style.top = `${top}px`;
  modalLinks.classList.toggle('hidden');

  if (!modalConfig.classList.contains('hidden')) {
    modalConfig.classList.toggle('hidden');
  }  
}
// --------------------------------------------------
function fechaModalLink() {  
  destravaScrollBars();
  // body.style.overflow = 'scroll';
  if (!modalLinks.classList.contains('hidden')) {
    modalLinks.classList.toggle('hidden');
  }
}
/*-------------------------------------------------------------------------------------------------*/
// ABRE E FECHA MODAL CONFIG
iconeConfig.addEventListener("click", function () {
    if (modalConfig.classList.contains('hidden')) {
      abreModalConfig();
    } else {
      fechaModalConfig();
    }
})
// --------------------------------------------------
function abreModalConfig() {
  travaScrollBars();
  var top = window.scrollY + 90;
  modalConfig.style.top = `${top}px`;
  modalConfig.classList.toggle('hidden');

  if (!modalLinks.classList.contains('hidden')) {
  modalLinks.classList.toggle('hidden');
  }   
}
// --------------------------------------------------
function fechaModalConfig() {
   destravaScrollBars(); 
  if (!modalConfig.classList.contains('hidden')) {
    modalConfig.classList.toggle('hidden');
  }
}
// FECHA MODAL AO CLICAR NA TELA
container.addEventListener("click", function () {
  fechaModalLink();
  fechaModalConfig();
})
// FECHA MODAL AO CLICAR NO LINK 
ulLinks.addEventListener('click', function () {
  fechaModalLink();
  fechaModalConfig();
})
divContato.addEventListener('click', function () {
  fechaModalLink();
  fechaModalConfig();
})
navUlLinks.addEventListener("click", function(el){
  fechaModalLink();
  fechaModalConfig();
})
/*-------------------------------------------------------------------------------------------------*/
// SELECIONA COR TEMA
seletorCores.addEventListener('click', function (el) {
  var i = el.target.getAttribute('data-cor');
  getComputedStyle(document.documentElement).getPropertyValue(`--cor-${i}`);
  getComputedStyle(document.documentElement).getPropertyValue(`--svg-${i}`);
  document.documentElement.style.setProperty('--cor-tema', `var(--cor-${i})`);
  document.documentElement.style.setProperty('--cor-icones-svg', `var(--svg-${i})`);
  var link = `assets/img-sobre-${i}.png`
  imgSobre.src = link;
  fechaModalConfig();
  console.log(imgSobre)
});






/*-------------------------------------------------------------------------------------------------*/
// SCROLL REVAL
/*-------------------------------------------------------------------------------------------------*/

// const sr = ScrollReveal ({
//     origin: 'top',
//     distance: '20px',
//     duration: 1000,
//     reset: true
// });

// sr.reveal(`.section-title`, {
//     interval: 100
// })
/*-------------------------------------------------------------------------------------------------*/