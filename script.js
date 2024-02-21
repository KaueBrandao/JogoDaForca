const botoes = document.querySelector(".btns")
const vida = document.querySelector(".vidas")
const tracos = document.querySelector(".tracos")
const dicas = document.querySelector(".dica")
const reiniciar = document.querySelector(".novo")
reiniciar.onclick = () => comeca()
let vidas
let Palavra
let TamanhoPalavras = 4

const palavras4 = [
  { palavra: "bife", dica: "fica muito bom à parmegiana" },
  { palavra: "bolo", dica: "Sempre tem em aniversario" },
  { palavra: "alho", dica: "Espanta vampiro" },
  { palavra: "coco", dica: "Verde por fora, Branco por dentro e tem uma lagoinha dentro" },
  { palavra: "doce", dica: "Bom pra sobremesa" },
];

const palavras5 = [
   { palavra: "carne", dica: "Bom pra um churrasco" },
   { palavra: "cacau", dica: "Faz o chocolate" },
   { palavra: "arroz", dica: "Não pode faltar no almoço" },
   { palavra: "aveia", dica: "Comida de velho" },
   { palavra: "amora", dica: "fruta nativa do Brasil que rima com amor" },
]

function pegarDica(){
  console.log(TamanhoPalavras)
  if(TamanhoPalavras === 5){
    console.log("5")
    let index = Math.floor(Math.random() * palavras5.length);
    return palavras5[index];
  }else{
    console.log("4")
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
  vida.textContent = "vidas: "+String(vidas)

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

  dicas.textContent = `Dica: ${dica}`
}

function respostaErrada() {
  vidas = vidas-1
  vida.textContent ="vidas: "+String(vidas)

  if (vidas === 0) {
    setTimeout(() => {
      alert("Perdeu! palavra: "+ Palavra)
      comeca()
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
  const ganhou = !Array.from(spans).find((span) => span.textContent === "_")

  if (ganhou) {
    setTimeout(() => {
      alert("Ganhou!")
      comeca()
    }, 100)
  }
}

function geradorButoes() {
  botoes.textContent = ""

  for (let i = 97; i < 123 ;i++) {
    const botao = document.createElement("button")
    const palavra = String.fromCharCode(i).toUpperCase()
    botao.textContent = palavra

    botao.onclick = () => {
      botao.disabled = true
      botao.style.backgroundColor = "gray"
      verificarPalavra(palavra)
    }

    botoes.appendChild(botao)
  }
}

comeca()




