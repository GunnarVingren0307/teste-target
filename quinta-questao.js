let stg = "carro";
let indice = 0;
let invertido = "";
for (let i = 0; i < stg.length; i++) {
  indice = stg.length - 1;

  invertido = invertido + stg[indice - i];
}
console.log(invertido);
