const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
console.log(total);
const media = total / (peso1 + peso2);
console.log(media);
// quantidades de casas decimais .toFixed
console.log(media.toFixed(2));
console.log(media.toString()); //converte o numero em string
//se quiser tranformar o resultado em binario e so colocar o 2 entre parentese dentro da função .toString(2)
console.log(typeof Number);
console.log(10.94578).toFixed(2);