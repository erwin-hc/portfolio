// SELETORES E VARIAVEIS
var body = document.querySelector('body');
var modalConfig = document.querySelector('.modal-config-container');
var modalLinks = document.querySelector('.modal-links-container');
var seletorCores = document.querySelector('.cores-container');
var navbar = document.querySelector(".navbar");
var navLinks = document.querySelectorAll('.nav-ul-item');
var navBg = getComputedStyle(document.documentElement).getPropertyValue('--cor-bg-dark'); 

var iconeDark = document.querySelector('.dark-svg');
var iconeLogo = document.querySelector('.logo-svg');
var iconeConfig = document.querySelector('.conf-svg');
var container = document.querySelector('.flex-container');
var ulLinks = document.querySelector('.ul-container');
var navUlLinks = document.querySelector('.nav-ul-container');
var divContato = document.querySelector('.div-contato');


/*-------------------------------------------------------------------------------------------------*/
// ESCONDE/MOSTRA NAVBAR/MODALS SCROLL
window.onscroll = function() {
   mudaCor(); 
} 
function mudaCor() {
  var shadow = getComputedStyle(document.documentElement).getPropertyValue('--box-shadow'); 
  var corSvgLinks = getComputedStyle(document.documentElement).getPropertyValue('--cor-svg-liks'); 
  var corSvgIcones = getComputedStyle(document.documentElement).getPropertyValue('--cor-icones-svg'); 
  var fontColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-font'); 
  var corTema = getComputedStyle(document.documentElement).getPropertyValue('--cor-tema'); 

  if (window.pageYOffset > 0) {

    iconeLogo.style.filter = `${corSvgLinks}`;
    iconeConfig.style.filter = `${corSvgLinks}`;
    iconeDark.style.filter = `${corSvgLinks}`;

    navLinks.forEach(function (index) {
      index.style.color = `${fontColor}`;
    })
    
    navbar.style.backgroundColor = `rgba(${navBg},0)`;
    navbar.style.boxShadow = "none";

  } else {
    iconeLogo.style.filter = `${corSvgIcones}`;
    iconeConfig.style.filter = `${corSvgIcones}`;
    iconeDark.style.filter = `${corSvgIcones}`;

    navbar.style.backgroundColor = `rgba(${navBg},1)`;
    navbar.style.boxShadow = `${shadow}`;

    navLinks.forEach(function (index) {
      index.style.color = `rgba(${corTema})`;
    })
  }
}
/*-------------------------------------------------------------------------------------------------*/
// DARK-MODE
iconeDark.addEventListener('click', function () {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    document.documentElement.style.setProperty('--cor-bg', `var(--cor-bg-dark`);
    document.documentElement.style.setProperty('--cor-font', `var(--font-bg-dark)`);
    document.documentElement.style.setProperty('--cor-svg-liks', `var(--svg-dark)`);
    document.documentElement.style.setProperty('--cor-bordas', `var(--cor-bordas-dark)`);
  } else {
    document.documentElement.style.setProperty('--cor-bg', `var(--cor-bg-ligth`);
    document.documentElement.style.setProperty('--cor-font', `var(--font-bg-ligth)`);
    document.documentElement.style.setProperty('--cor-svg-liks', `var(--svg-ligth)`);
    document.documentElement.style.setProperty('--cor-bordas', `var(--cor-bordas-light)`);
  }
  mudaCor();

  // document.documentElement.style.setProperty('--cor-tema', `var(--cor-${i})`);

  // body...
})
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
  if (i >= 1) {
  getComputedStyle(document.documentElement).getPropertyValue(`--cor-${i}`);
  getComputedStyle(document.documentElement).getPropertyValue(`--svg-${i}`);
  document.documentElement.style.setProperty('--cor-tema', `var(--cor-${i})`);
  document.documentElement.style.setProperty('--cor-icones-svg', `var(--svg-${i})`);

  mudaCor();
  fechaModalConfig();
  }

});



/*-------------------------------------------------------------------------------------------------*/
// typewriter
/*-------------------------------------------------------------------------------------------------*/

var code = document.querySelector('.code');

var typewriter = new Typewriter(code, {
  loop: true,
  delay: 40,
  deleteSpeed: 40,
  skipAddStyles: true,
});

typewriter
  // .pauseFor(300)
  .typeString("<span style='color:#be8ee4'>var </span><span style='color:var(--cor-font)'>estudante  = {</span><span style='color:rgba(var(--cor-tema),1)'>\
  <br>&emsp;&emsp;<span style='color:var(--cor-font)'>nome:</span> 'Erwin Stein',\
  <br>&emsp;&emsp;<span style='color:var(--cor-font)'>objetivo:</span> 'Web Designer',\
  <br>&emsp;&emsp;<span style='color:var(--cor-font)'>localização:</span> 'Terra 😉',\
  <br>&emsp;&emsp;<span style='color:var(--cor-font)'>cursando: [</span>\
  <br>&emsp;&emsp;&emsp;'Javascript',\
  <br>&emsp;&emsp;&emsp;'HTML'\
  <br>&emsp;&emsp;&emsp;'CSS'\
  <br>&emsp;&emsp;&emsp;'Análise e <br>&emsp;&emsp;&emsp;Desenvolvimento <br>&emsp;&emsp;&emsp;de Sistemas'\
  <span style='color:var(--cor-font)'>]<br>&emsp;&emsp;};</span>")
  .pauseFor(500)
  .start();


/*-------------------------------------------------------------------------------------------------*/
// SCROLL REVAL
/*-------------------------------------------------------------------------------------------------*/

const sr = ScrollReveal ({
    origin: 'top',
    distance: '20px',
    duration: 500,
    reset: true
});

sr.reveal(`.section-title,.scroll-revel`, {
    interval: 100
})
/*-------------------------------------------------------------------------------------------------*/