
// SELETORES E VARIAVEIS
var body = document.querySelector('body');
var modalConfig = document.querySelector('.modal-config-container');
var modalLinks = document.querySelector('.modal-links-container');
var modalMsgEmail = document.querySelector('.modal-msg-email');
var seletorCores = document.querySelector('.cores-container');
var navbar = document.querySelector(".navbar");
var navLinks = document.querySelectorAll('.nav-ul-item');
var iconeDark = document.querySelector('.dark-svg');
var iconeLogo = document.querySelector('.logo-svg');
var iconeConfig = document.querySelector('.conf-svg');
var container = document.querySelector('.flex-container');
var ulLinks = document.querySelector('.ul-container');
var navUlLinks = document.querySelector('.nav-ul-container');
var divContato = document.querySelector('.div-contato');

/*-------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------*/
// ESCONDE/MOSTRA NAVBAR/MODALS SCROLL
window.onscroll = function() {
   mudaCor(); 
} 
/*-------------------------------------------------------------------------------------------------*/
// MUDA COR
function mudaCor() {
  var shadow = getComputedStyle(document.documentElement).getPropertyValue('--box-shadow'); 
  var corSvgLinks = getComputedStyle(document.documentElement).getPropertyValue('--cor-svg-liks'); 
  var corSvgIcones = getComputedStyle(document.documentElement).getPropertyValue('--cor-icones-svg'); 
  var fontColor = getComputedStyle(document.documentElement).getPropertyValue('--cor-font'); 
  var corTema = getComputedStyle(document.documentElement).getPropertyValue('--cor-tema'); 
  var navBg = getComputedStyle(document.documentElement).getPropertyValue('--cor-bg-dark-card'); 

  
  if (window.pageYOffset > 0) {

    iconeLogo.style.filter = `${corSvgLinks}`;
    iconeConfig.style.filter = `${corSvgLinks}`;

    navLinks.forEach(function (index) {
      index.style.color = `${fontColor}`;
    })
    
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = "none";

  } else {
    iconeLogo.style.filter = `${corSvgIcones}`;
    iconeConfig.style.filter = `${corSvgIcones}`;

    navbar.style.backgroundColor = `${navBg}`;
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
  var textDarkLight = document.querySelector('.textoDarkLight');
  var imgJogoforca = document.querySelector('.img-jogoforca');
  var imgDecodificador = document.querySelector('.img-decodificador');
  var cardBox = document.querySelectorAll('.card-box');
  // console.log(cardBox)


  if (body.classList.contains('dark')) {
    document.documentElement.style.setProperty('--cor-bg', `var(--cor-bg-dark`);
    document.documentElement.style.setProperty('--cor-font', `var(--font-bg-dark)`);
    document.documentElement.style.setProperty('--cor-svg-liks', `var(--svg-dark)`);
    document.documentElement.style.setProperty('--cor-bordas', `var(--cor-bordas-dark)`);
    textDarkLight.innerHTML = `<span>light-</span>mode`;
    iconeDark.src="assets/light-mode.svg";
    imgJogoforca.src = "assets/jogodaforca-d.png"
    imgDecodificador.src = "assets/decodificador-d.png"

    cardBox.forEach(function (index) {
      index.style.backgroundColor = "var(--cor-bg-dark-card)";
    });


  } else {
    document.documentElement.style.setProperty('--cor-bg', `var(--cor-bg-ligth`);
    document.documentElement.style.setProperty('--cor-font', `var(--font-bg-ligth)`);
    document.documentElement.style.setProperty('--cor-svg-liks', `var(--svg-ligth)`);
    document.documentElement.style.setProperty('--cor-bordas', `var(--cor-bordas-light)`);   
    textDarkLight.innerHTML = `<span>dark-</span>mode`;
    iconeDark.src="assets/dark-mode.svg"
    imgJogoforca.src = "assets/jogodaforca-l.png"
    imgDecodificador.src = "assets/decodificador-l.png"

    cardBox.forEach(function (index) {
      index.style.backgroundColor = "var(--cor-bg-light-card)";
    });
  }
  mudaCor();
  fechaModalConfig();


})
/*-------------------------------------------------------------------------------------------------*/
// TRAVA SCROLLBAR
function travaScrollBars() {
    document.documentElement.style.overflowY = 'hidden';
}
// DESTRAVA SCROLLBAR
function destravaScrollBars() {
    document.documentElement.style.overflowY = 'initial';
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
// import Typewriter from 'typewriter-effect/dist/core';
var code = document.querySelector('.code');

var typewriter = new Typewriter(code, {
  loop: true,
  delay: 50,
  deleteSpeed: 0,
  // skipAddStyles: false,
});

typewriter
  .typeString("<span style='color:#be8ee4'>var </span>estudante  = {")
  .typeString("\n    nome: <span style='color:rgb(var(--cor-tema))'>'Erwin Stein',</span>")
  .typeString("\n    objetivo: <span style='color:rgb(var(--cor-tema))'>'Web Designer',</span>")
  .typeString("\n    localização: <span style='color:rgb(var(--cor-tema))'>'Terra :-D',</span>")
  .typeString("\n    cursando: [")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'HTML',</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'CSS',</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'JAVASCRIPT',</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>'Análise e</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>Desenvolvimento</span>")
  .typeString("\n       <span style='color:rgb(var(--cor-tema))'>de Sistemas',</span>")
  .typeString("\n    ]")
  .typeString("\n};  ")
  .pauseFor(5000)
  .deleteAll()
  .start(); 

/*-------------------------------------------------------------------------------------------------*/
// SCROLL REVAL
/*-------------------------------------------------------------------------------------------------*/

const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 800,
    reset: true
});

sr.reveal(`.section-title,.scroll-revel,.card-box`, {
    interval: 100
})


/*-------------------------------------------------------------------------------------------------*/
// GAUGE
/*-------------------------------------------------------------------------------------------------*/

var corTema = getComputedStyle(document.documentElement).getPropertyValue('--cor-tema'); 
var skillBox = document.querySelectorAll('.skill-box');
var canvasJs = document.querySelector('.canvas-js'); 
var canvasCss = document.querySelector('.canvas-css'); 
var canvasHtml = document.querySelector('.canvas-html'); 
var canvasSql = document.querySelector('.canvas-sql'); 
var canvasPython = document.querySelector('.canvas-python'); 
var canvasJava = document.querySelector('.canvas-java'); 
var canvasGit = document.querySelector('.canvas-git'); 


var gaugeOpts = {
  lines: 20,
  angle: 0.025,
  lineWidth: 0.2,
  pointer: {
    length: 0.65,
    strokeWidth: 0.06,
    color: '#0066FF'
  },
  limitMax: 'false', 
  limitMin: 'false',
  percentColors: [[0.0, "#ed2960" ], [0.50, "#ddee2c"], [1.0, "#00bc69"]], // !!!!
  strokeColor: '#BCBCBC',
  generateGradient: true,
};

// GAUGE SKILL JS
var gaugeJs = new Gauge(canvasJs).setOptions(gaugeOpts);
  gaugeJs.maxValue = 100;
  gaugeJs.animationSpeed = 32;
  gaugeJs.set(21);
// GAUGE SKILL CSS
var gaugeCss = new Gauge(canvasCss).setOptions(gaugeOpts);
  gaugeCss.maxValue = 100;
  gaugeCss.animationSpeed = 32;
  gaugeCss.set(27);
// GAUGE SKILL HTML
var gaugeHtml = new Gauge(canvasHtml).setOptions(gaugeOpts);
  gaugeHtml.maxValue = 100;
  gaugeHtml.animationSpeed = 32;
  gaugeHtml.set(38);
// GAUGE SKILL JAVA
var gaugeJava = new Gauge(canvasJava).setOptions(gaugeOpts);
  gaugeJava.maxValue = 100;
  gaugeJava.animationSpeed = 32;
  gaugeJava.set(3);
// GAUGE SKILL PYTHON
var gaugePython = new Gauge(canvasPython).setOptions(gaugeOpts);
  gaugePython.maxValue = 100;
  gaugePython.animationSpeed = 32;
  gaugePython.set(5);
// GAUGE SKILL SQL
var gaugeSql = new Gauge(canvasSql).setOptions(gaugeOpts);
  gaugeSql.maxValue = 100;
  gaugeSql.animationSpeed = 32;
  gaugeSql.set(4);
// GAUGE SKILL GIT
var gaugeGit = new Gauge(canvasGit).setOptions(gaugeOpts);
  gaugeGit.maxValue = 100;
  gaugeGit.animationSpeed = 32;
  gaugeGit.set(25);



skillBox.forEach(function (box) {
  box.addEventListener('mouseover', function () {
    animacaoMedidor();
  })
})

function animacaoMedidor() {
    gaugeJs.set(100);
    gaugeCss.set(100);
    gaugeHtml.set(100);
    gaugeSql.set(100);
    gaugePython.set(100);
    gaugeJava.set(100);
    gaugeGit.set(100);

    setTimeout(function () {
     gaugeJs.set(21);
     gaugeCss.set(27);
     gaugeHtml.set(38);
     gaugeSql.set(3);
     gaugePython.set(5);
     gaugeJava.set(4);
     gaugeGit.set(25);
    }, 900);
}

/*-------------------------------------------------------------------------------------------------*/
// EMAIL
/*-------------------------------------------------------------------------------------------------*/
var inputNome = document.getElementById('from_name');
var inputFrom = document.getElementById('reply_to');
var inputTexto = document.getElementById('message');
var formEmail = document.getElementById('form');

const _0x5022cf=_0x4820;(function(_0xe3ed08,_0x33d921){const _0x31380e=_0x4820,_0x23114a=_0xe3ed08();while(!![]){try{const _0x275f4f=parseInt(_0x31380e(0x16f))/0x1+parseInt(_0x31380e(0x164))/0x2*(parseInt(_0x31380e(0x16c))/0x3)+parseInt(_0x31380e(0x16b))/0x4+-parseInt(_0x31380e(0x16e))/0x5*(-parseInt(_0x31380e(0x161))/0x6)+parseInt(_0x31380e(0x163))/0x7*(parseInt(_0x31380e(0x168))/0x8)+parseInt(_0x31380e(0x169))/0x9*(parseInt(_0x31380e(0x167))/0xa)+parseInt(_0x31380e(0x166))/0xb*(-parseInt(_0x31380e(0x16d))/0xc);if(_0x275f4f===_0x33d921)break;else _0x23114a['push'](_0x23114a['shift']());}catch(_0x3d2f5c){_0x23114a['push'](_0x23114a['shift']());}}}(_0x2421,0xb76f0),(function(){const _0x541512=_0x4820;emailjs[_0x541512(0x16a)](_0x541512(0x162));}()));function _0x2421(){const _0x3e5681=['48flEKPC','wwUibZ_fqYl6et2kg','1043UXiXGx','298rIxWCx','template_fkbo3x6','11yBRPfO','20FIoMin','27928EUHpLP','5154102JRySnN','init','5417276DfUDcx','3231hkUnjJ','46637028MNIEGB','240935sKUJlF','1071960VUVxOf'];_0x2421=function(){return _0x3e5681;};return _0x2421();}function _0x4820(_0x494147,_0x49b24f){const _0x242113=_0x2421();return _0x4820=function(_0x4820cd,_0x5a6760){_0x4820cd=_0x4820cd-0x161;let _0x2e176c=_0x242113[_0x4820cd];return _0x2e176c;},_0x4820(_0x494147,_0x49b24f);}const serviceID='service_frpwugc',templateID=_0x5022cf(0x165);

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   formEmail[0].value = formEmail[0].value.toUpperCase();
   var emailValido = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

                if (inputNome.value === ''){
                inputNome.focus();
                inputNome.placeholder = "Digite seu nome";
                inputNome.style.border ="1px solid #F93154";
                inputNome.style.backgroundColor ="#F9315410";

                window.setTimeout(function() { 
                inputNome.placeholder = "";
                inputNome.style.border = "1px solid var(--cor-bordas)"; 
                inputNome.style.backgroundColor ="rgba(var(--cor-bg),1)";
                }, 1000);
                return;

                }
                
                if (!inputFrom.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                inputFrom.focus();
                inputFrom.value = "";
                inputFrom.placeholder = "Digite um email válido";
                inputFrom.style.border ="1px solid #F93154";
                inputFrom.style.backgroundColor ="#F9315410";
                window.setTimeout(function() { 
                inputFrom.placeholder = "";
                inputFrom.style.border = "1px solid var(--cor-bordas)"; 
                inputFrom.style.backgroundColor ="rgba(var(--cor-bg),1)";
                }, 1000);
                return;
                }

                if (inputTexto.value === ''){
                inputTexto.focus();
                inputTexto.style.border ="1px solid #F93154";
                inputTexto.style.backgroundColor ="#F9315410";
                window.setTimeout(function() { 
                inputTexto.style.border = "1px solid var(--cor-bordas)"; 
                inputTexto.style.backgroundColor ="rgba(var(--cor-bg),1)";
                }, 1000);
                return;
                }

   btn.value = 'Enviando...';

   emailjs.sendForm(serviceID, templateID, this)    
    .then(() => {   
    btn.value = 'Enivar';
    inputVerde();
    msgEmailSucesso();
    }, (err) => {
    btn.value = 'Enviar';
    inputVermelho();
    msgEmailErro();
    });
});

// VALIDAR DADOS 
function validaDados(e) {
        e.preventDefault();
        
        var emailValido = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

        if (inputNome.value === ''){
        inputNome.focus();
        inputNome.placeholder = "Digite seu nome";
        inputNome.style.border ="1px solid #F93154";
        inputNome.style.backgroundColor ="#F9315410";

        window.setTimeout(function() { 
        inputNome.placeholder = "";
        inputNome.style.border = "1px solid var(--cor-bordas)"; 
        inputNome.style.backgroundColor ="rgba(var(--cor-bg),1)";
        }, 1500);
        return;

        }
        
        if (!inputFrom.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        inputFrom.focus();
        inputFrom.value = "";
        inputFrom.placeholder = "Digite um email válido";
        inputFrom.style.border ="1px solid #F93154";
        inputFrom.style.backgroundColor ="#F9315410";
        window.setTimeout(function() { 
        inputFrom.placeholder = "";
        inputFrom.style.border = "1px solid var(--cor-bordas)"; 
        inputFrom.style.backgroundColor ="rgba(var(--cor-bg),1)";
        }, 1500);
        return;
        }

        if (inputTexto.value === ''){
        inputTexto.focus();
        inputTexto.style.border ="1px solid #F93154";
        inputTexto.style.backgroundColor ="#F9315410";
        window.setTimeout(function() { 
        inputTexto.style.border = "1px solid var(--cor-bordas)"; 
        inputTexto.style.backgroundColor ="rgba(var(--cor-bg),1)";
        }, 1500);
        return;
        }
        inputNome.focus();

};

// INPUTS VERDES
function inputVerde() {
      inputNome.style.backgroundColor = "#00B74A10";
      inputTexto.style.backgroundColor = "#00B74A10";
      inputFrom.style.backgroundColor = "#00B74A10";
      inputNome.style.border = "1px solid #00B74A";
      inputTexto.style.border = "1px solid #00B74A";
      inputFrom.style.border = "1px solid #00B74A";

      window.setTimeout(function() {
        inputNome.style.backgroundColor = "rgba(var(--cor-bg),1)";
        inputTexto.style.backgroundColor = "rgba(var(--cor-bg),1)";
        inputFrom.style.backgroundColor = "rgba(var(--cor-bg),1)";
        inputNome.style.border = "1px solid var(--cor-bordas)";
        inputTexto.style.border = "1px solid var(--cor-bordas)";        
        inputFrom.style.border = "1px solid var(--cor-bordas)";        
      }, 1500);
}

// INPUTS VERMELHOS
function inputVermelho() {
      inputNome.style.backgroundColor = "#F9315410";
      inputTexto.style.backgroundColor = "#F9315410";
      inputFrom.style.backgroundColor = "#F9315410";
      inputNome.style.border = "1px solid #F93154";
      inputTexto.style.border = "1px solid #F93154";
      inputFrom.style.border = "1px solid #F93154";

      window.setTimeout(function() {
        inputNome.style.backgroundColor = "rgba(var(--cor-bg),1)";
        inputTexto.style.backgroundColor = "rgba(var(--cor-bg),1)";
        inputFrom.style.backgroundColor = "rgba(var(--cor-bg),1)";
        inputNome.style.border = "1px solid var(--cor-bordas)";
        inputTexto.style.border = "1px solid var(--cor-bordas)";        
        inputFrom.style.border = "1px solid var(--cor-bordas)";        
      }, 1500);
}

// MODAL MSG EMAIL
function msgEmailSucesso() {
  var top = window.scrollY;
  modalMsgEmail.querySelector('.msg-container').style.backgroundColor = "#00B74A";
  modalMsgEmail.querySelector('h1').innerHTML = "Enviado com sucesso!";
  modalMsgEmail.querySelector('img').src = "assets/email-sucesso.svg";

  modalMsgEmail.style.top = `${top}px`;
  modalMsgEmail.classList.toggle('hidden');
  window.setTimeout(function (){
    modalMsgEmail.classList.toggle('hidden');
  },1500);

  window.setTimeout(function () {
  formEmail.reset();
  },1500);

}

function msgEmailErro() {
  var top = window.scrollY;
  modalMsgEmail.querySelector('.msg-container').style.backgroundColor = "#F93154";
  modalMsgEmail.querySelector('h1').innerHTML = "Erro, email não enviado!";
  modalMsgEmail.querySelector('img').src = "assets/email-falha.svg";

  modalMsgEmail.style.top = `${top}px`;
  modalMsgEmail.classList.toggle('hidden');
  window.setTimeout(function (){
    modalMsgEmail.classList.toggle('hidden');
  },1500);

  window.setTimeout(function () {
  formEmail.reset();
  },1500);

}
/*-------------------------------------------------------------------------------------------------*/
// Fim
/*-------------------------------------------------------------------------------------------------*/

