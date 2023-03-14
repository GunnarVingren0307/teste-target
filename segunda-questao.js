let numeroEscolhido = 58; //variável responsável pelo set do número escolhido
let seq = new Array(0, 1); //array aonde os números serão adicionados após o cálculo
let num = 0; //variável responsável por guardar o próximo número, que será adicionado ao array
let teste = 0; //variável que eu usei para guardar o resultado caso o teste funcionasse

//laço responsável por gerar e inserir os números no array
for (let i = 1; i < numeroEscolhido; i++) {
  num = seq[i] + seq[i - 1];
  seq.push(num);
}
/*laço responsável por percorrer o array da sequencia e
identificar se existe nela o número desejado*/
for (let j = 0; j < seq.length; j++) {
  if (numeroEscolhido == seq[j]) {
    teste = 1;
  }
}
//caso exista ele retorna a primeira mensagem, caso contrário ele retorna a segunda mensagem
if (teste == 1) {
  console.log("Número está dentro do conjuto de soluções da sequência ");
} else {
  console.log("Número não está dentro do conjuto de soluções da sequência ");
}
