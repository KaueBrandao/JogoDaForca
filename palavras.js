const palavras = [
  { palavra: "abacaxi", dica: "Fruta com coroa" },
  { palavra: "elefante", dica: "Maior animal terrestre do mundo" },
  { palavra: "computador", dica: "Me usam para programar" },
  { palavra: "esmeralda", dica: "Minerio do Minecraft" },
  { palavra: "sorvete", dica: "Bom no Calor" },
];

export default function pegarDica() {
  const index = Math.floor(Math.random() * palavras.length);
  return palavras[index];
}
