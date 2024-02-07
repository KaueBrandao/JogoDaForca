const palavras = [
  { palavra: "fato", dica: "Algo incontestável" },
  { palavra: "casa", dica: "Onde pessoas moram" },
  { palavra: "cerne", dica: "Bom pra um churrasco" },
  { palavra: "amigo", dica: "Sempre está com você" },
  { palavra: "tempo", dica: "Sempre está correndo" },
  { palavra: "medo", dica: "Sentimento ou fobia" },
  { palavra: "tudo", dica: "Contrario de nada" },
  { palavra: "nada", dica: "Contrario de tudo" },
  { palavra: "área", dica: "Um espaço demarcado" },
  { palavra: "doce", dica: "Bom pra sobremesa" },
];

export default function pegarDica() {
  const index = Math.floor(Math.random() * palavras.length);
  return palavras[index];
}
