// motivacao.js

const frases = [
  "⚡ A disciplina vence o talento!",
  "🔥 Continue mesmo quando ninguém estiver vendo.",
  "🚀 Pequenos passos diários geram grandes resultados.",
  "💪 Dor é temporária, mas o orgulho é pra sempre.",
  "🎯 Quem quer, encontra um jeito. Quem não quer, arranja uma desculpa."
];

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
console.log("\n=== Mensagem do Dia ===");
console.log(fraseAleatoria + "\n");

