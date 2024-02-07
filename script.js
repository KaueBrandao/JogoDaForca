import pegarDica from "./palavras.js";

const contentBtns = document.querySelector(".btns");
const divVida = document.querySelector(".vidas");
const tracos = document.querySelector(".tracos");
const img = document.querySelector("img");
const conteudodicas = document.querySelector(".dica");
const btnnovo = document.querySelector(".novo");
btnnovo.onclick = () => init();
let vidas;

init();

function init() {
  vidas = 6
  divVida.textContent = "vidas: "+String(vidas)

  geradorPerguntas();
  geradorButoes();
}

function geradorPerguntas() {
  tracos.textContent = "";

  const { palavra, dica } = pegarDica();
  const palavraComAcento = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(palavraComAcento).forEach((palavra) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("palavra", palavra.toUpperCase());
    tracos.appendChild(span);
  });

  conteudodicas.textContent = `Dica: ${dica}`;
}

function respostaErrada() {
  vidas = vidas-1;
  divVida.textContent ="vidas: "+String(vidas)

  if (vidas === 0) {
    setTimeout(() => {
      alert("Perdeu");
      init();
    }, 100);
  }
}

function verificarPalavra(palavra) {
  const arr = document.querySelectorAll(`[palavra="${palavra}"]`);

  if (!arr.length) respostaErrada();

  arr.forEach((e) => {
    e.textContent = palavra;
  });

  const spans = document.querySelectorAll(`.tracos span`);
  const won = !Array.from(spans).find((span) => span.textContent === "_");

  if (won) {
    setTimeout(() => {
      alert("Ganhou!");
      init();
    }, 100);
  }
}

function geradorButoes() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const palavra = String.fromCharCode(i).toUpperCase();
    btn.textContent = palavra;

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verificarPalavra(palavra);
    };

    contentBtns.appendChild(btn);
  }
}
