let faturamento = [
  22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258,
  46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448,
  18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662,
  13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61, 0,
];
let media = 0;
let indice = 0;
let target = 0;
let maiorInteirino = 0;
let menorInteirino = 0;
for (let i = 0; i < faturamento.length; i++) {
  /*maior e menor faturamento do mes */
  if (faturamento[i] > faturamento[maiorInteirino]) {
    maiorInteirino = i;
  } else if (
    faturamento[i] != 0 &&
    faturamento[i] < faturamento[menorInteirino]
  ) {
    menorInteirino = i;
  } else if (faturamento[i] === 0) {
    target++;
  }
  media += faturamento[i];
}
for (let i = 0; i < faturamento.length; i++) {
  if (faturamento[i] > media / (30 - target)) {
    indice++;
  }
}
console.log(
  "O maior faturamento foi de: " +
    faturamento[maiorInteirino] +
    ", no dia " +
    (maiorInteirino + 1)
);
console.log(
  "O menor faturamento foi de: " +
    faturamento[menorInteirino] +
    ", no dia " +
    (menorInteirino + 1)
);
console.log(
  "O número de dias no mês em que o valor de faturamento diário foi superior à média mensal é igual a: " +
    indice
);
