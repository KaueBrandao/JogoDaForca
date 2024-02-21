const contentBtns = document.querySelector(".btns")
const divVida = document.querySelector(".vidas")
const tracos = document.querySelector(".tracos")
const conteudodicas = document.querySelector(".dica")
const btnnovo = document.querySelector(".novo")
btnnovo.onclick = () => comeca()
let vidas
let Palavra
let TamanhoPalavras = 4

const palavras4 = [
  { palavra: "fato", dica: "Algo incontestável" },
  { palavra: "casa", dica: "Onde pessoas moram" },
  { palavra: "medo", dica: "Sentimento ou fobia" },
  { palavra: "tudo", dica: "Contrario de nada" },
  { palavra: "nada", dica: "Contrario de tudo" },
  { palavra: "doce", dica: "Bom pra sobremesa" },
];

const palavras5 = [
   { palavra: "cerne", dica: "Bom pra um churrasco" },
   { palavra: "amigo", dica: "Sempre está com você" },
   { palavra: "tempo", dica: "Sempre está correndo" },
   { palavra: "área", dica: "Um espaço demarcado" },
]

function pegarDica(){
  if(TamanhoPalavras == 5){
    let index = Math.floor(Math.random() * palavras5.length);
    return palavras5[index];
  }else{
    let index = Math.floor(Math.random() * palavras4.length);
    return palavras4[index];
  }
}

function comeca() {
  var quantidadeLetras=prompt("Quantidade de letras: (4 ou 5):");

  if(quantidadeLetras == 4 | quantidadeLetras == 5){
    TamanhoPalavras = parseInt(quantidadeLetras)
  }

  vidas = 6
  divVida.textContent = "vidas: "+String(vidas)

  geradorPerguntas()
  geradorButoes()
}

function geradorPerguntas() {
  tracos.textContent = ""

  const { palavra, dica } = pegarDica()
  Palavra = palavra
  const palavraComAcento = palavra
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  Array.from(palavraComAcento).forEach((palavra) => {
    const span = document.createElement("span")

    span.textContent = "_"
    span.setAttribute("palavra", palavra.toUpperCase())
    tracos.appendChild(span)

  })

  conteudodicas.textContent = `Dica: ${dica}`
}

function respostaErrada() {
  vidas = vidas-1
  divVida.textContent ="vidas: "+String(vidas)

  if (vidas === 0) {
    setTimeout(() => {
      alert("Perdeu palaavra: "+ Palavra)
      init()
    }, 100)
  }
}

function verificarPalavra(palavra) {
  const arr = document.querySelectorAll(`[palavra="${palavra}"]`)

  if (!arr.length) respostaErrada()

  arr.forEach((e) => {
    e.textContent = palavra
  })

  const spans = document.querySelectorAll(`.tracos span`)
  const won = !Array.from(spans).find((span) => span.textContent === "_")

  if (won) {
    setTimeout(() => {
      alert("Ganhou!")
      init()
    }, 100)
  }
}

function geradorButoes() {
  contentBtns.textContent = ""

  for (let i = 97; i < 123 ;i++) {
    const btn = document.createElement("button")
    const palavra = String.fromCharCode(i).toUpperCase()
    btn.textContent = palavra

    btn.onclick = () => {
      btn.disabled = true
      btn.style.backgroundColor = "gray"
      verificarPalavra(palavra)
    }

    contentBtns.appendChild(btn)
  }
}

comeca()



