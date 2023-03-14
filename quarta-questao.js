let nome = ["SP ", "RJ ", "MG ", "ES ", "Outros "];
let faturamento = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53];
let total = 0;

for (let i = 0; i < faturamento.length; i++) {
  total = total + faturamento[i];
}
for (let i = 0; i < faturamento.length; i++) {
  console.log(nome[i] + (faturamento[i] * 100) / total + "%");
}
console.log("Valor total:  " + "R$" + total);
