//Cria pompt para preencher o nome das  equipes

// Array com o nome das equipes e suas imagens
var equipes = [
  { nome: "Flamengo", imagem: "src/imagens/flamengo.jpg" },
  { nome: "Palmeiras", imagem: "src/imagens/palmeiras.jpg" },
  { nome: "Fortaleza", imagem: "src/imagens/fortaleza.jpg" },
  { nome: "São Paulo", imagem: "src/imagens/saopaulo.jpg" },
  { nome: "Bahia", imagem: "src/imagens/bahia.jpg" },
  { nome: "Gremio", imagem: "src/imagens/gremio.jpg" },
  { nome: "Vasco", imagem: "src/imagens/vasco.jpg" },
  { nome: "Internacional", imagem: "src/imagens/internacional.jpg" },
  { nome: "Santos", imagem: "src/imagens/santos.jpg" },
  { nome: "Bragantino", imagem: "src/imagens/bragantino.jpg" },
  { nome: "CAP", imagem: "src/imagens/cap.jpg" },
  { nome: "Fluminense", imagem: "src/imagens/fluminense.jpg" },
    // Adicione as outras equipes aqui
  ];

  // Função para atribuir os valores às divs
  function atribuirEquipes() {
    var equipeA = prompt("Digite o nome da Equipe A:");

    var equipeEncontradaA = false;
    var equipeEncontradaB = false;

    // Procura a equipe A no array (sem diferenciação entre maiúsculas e minúsculas)
    for (var i = 0; i < equipes.length; i++) {
      if (equipes[i].nome.toUpperCase() === equipeA.toUpperCase()) {
        equipeEncontradaA = true;
        document.getElementById("escudoEquipeA").src = equipes[i].imagem;
        document.getElementById("nome-equipe-a").textContent = equipes[i].nome.toUpperCase();
        break;
      }
    }

    // Verifica se a equipe A foi encontrada
    if (!equipeEncontradaA) {
      alert("Equipe A não encontrada, clique ok, e digite novamente.");
      atribuirEquipes(); // Chama a função novamente para solicitar um novo nome para a equipe A
      return; // Retorna para evitar a exibição do prompt da equipe B
    }

    var equipeB = prompt("Digite o nome da Equipe B:");

    // Procura a equipe B no array (sem diferenciação entre maiúsculas e minúsculas)
    for (var i = 0; i < equipes.length; i++) {
      if (equipes[i].nome.toUpperCase() === equipeB.toUpperCase()) {
        equipeEncontradaB = true;
        document.getElementById("escudoEquipeB").src = equipes[i].imagem;
        document.getElementById("nome-equipe-b").textContent = equipes[i].nome.toUpperCase();
        break;
      }
    }

    // Verifica se a equipe B foi encontrada
    if (!equipeEncontradaB) {
      alert("Equipe B não encontrada, clique ok, e digite novamente.");
      atribuirEquipes(); // Chama a função novamente para solicitar um novo nome para a equipe B
    }
  }

  // Chama a função quando a página é carregada
  window.onload = atribuirEquipes;

//Botão para transição entre primeiro e segundo tempo

  const primeiroTempo = document.querySelector('.primeiro-tempo');
  const segundoTempo = document.querySelector('.segundo-tempo');
  const alternarBtn = document.getElementById('meuBotao');

  alternarBtn.addEventListener('click', function () {
      const primeiroTempoStyle = getComputedStyle(primeiroTempo);
      const segundoTempoStyle = getComputedStyle(segundoTempo);

      const primeiroTempoBackground = primeiroTempoStyle.backgroundColor;
      const segundoTempoBackground = segundoTempoStyle.backgroundColor;

      primeiroTempo.style.backgroundColor = segundoTempoBackground;
      segundoTempo.style.backgroundColor = primeiroTempoBackground;
  });

// Variáveis globais
let timerInterval;
let timerDisplay = document.querySelector('.tempo-de-jogo');
let startBtn = document.querySelector('#startBtn');
let pauseBtn = document.querySelector('#pauseBtn');
let continueBtn = document.querySelector('#continueBtn');
let resetBtn = document.querySelector('#resetBtn');
let timeRemaining = 20 * 60; // 20 minutos em segundos

// Função para formatar o tempo em MM:SS
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Função para atualizar o cronômetro
function updateTimer() {
  timerDisplay.textContent = formatTime(timeRemaining);
  timeRemaining--;

  if (timeRemaining < 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = '00:00';
    alert('O tempo acabou!');
    pauseBtn.disabled = true;
    continueBtn.disabled = true;
  }
}

// Função para reproduzir o som de apito de futebol
function playApito() {
  let audio = document.querySelector('#apito');
  audio.play();
}

// Função para iniciar a contagem regressiva de 10 segundos
function startCountdown() {
  let countdown = 5;
  timerDisplay.textContent = countdown;

  let countdownInterval = setInterval(function() {
    countdown--;
    timerDisplay.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      playApito();
      timerDisplay.textContent = formatTime(timeRemaining);
      timerInterval = setInterval(updateTimer, 1000);
      startBtn.disabled = true;
      pauseBtn.disabled = false;
    }
  }, 1000);
}

// Evento do botão Iniciar
startBtn.addEventListener('click', function() {
  startCountdown();
});

// Evento do botão Pausar
pauseBtn.addEventListener('click', function() {
  clearInterval(timerInterval);
  pauseBtn.disabled = true;
  continueBtn.disabled = false;
});

// Evento do botão Continuar
continueBtn.addEventListener('click', function() {
  timerInterval = setInterval(updateTimer, 1000);
  pauseBtn.disabled = false;
  continueBtn.disabled = true;
});

// Evento do botão Reiniciar
resetBtn.addEventListener('click', function() {
  clearInterval(timerInterval);
  timerDisplay.textContent = '20:00';
  timeRemaining = 20 * 60;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  continueBtn.disabled = true;
});

//Botões de Gols das equipes

//Gols Equipe A
var golEquipeA = 0;
    var golsTimeA = document.getElementById('gols-equipe-a');

    function incrementGolA() {
      golEquipeA++;
      golsTimeA.textContent = golEquipeA;
    }

    function decrementGolA() {
      if (golEquipeA > 0) {
        golEquipeA--;
        golsTimeA.textContent = golEquipeA;
      }
    }

    //Gols Equipe B

    var golEquipeB = 0;
    var golsTimeB = document.getElementById('gols-equipe-b');

    function incrementGolB() {
      golEquipeB++;
      golsTimeB.textContent = golEquipeB;
    }

    function decrementGolB() {
      if (golEquipeB > 0) {
        golEquipeB--;
        golsTimeB.textContent = golEquipeB;
      }
    }

    //Faltas Equipe A
var faltasEquipeA = 0;
var faltasTimeA = document.getElementById('faltas-equipe-a');

function incrementFaltasA() {
  faltasEquipeA++;
  faltasTimeA.textContent = faltasEquipeA;
}

function decrementFaltasA() {
  if (faltasEquipeA > 0) {
    faltasEquipeA--;
    faltasTimeA.textContent = faltasEquipeA;
  }
}

//Faltas Equipe B
var faltasEquipeB = 0;
var faltasTimeB = document.getElementById('faltas-equipe-b');

function incrementFaltasB() {
  faltasEquipeB++;
  faltasTimeB.textContent = faltasEquipeB;
}

function decrementFaltasB() {
  if (faltasEquipeB > 0) {
    faltasEquipeB--;
    faltasTimeB.textContent = faltasEquipeB;
  }
}

