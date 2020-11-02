const nome = 'Rebeca';
const concatenacao = 'ola ' + nome + '!';
console.log(concatenacao);
const template = `
olá
${nome}!` //com a crase pode concatenar
    //quebrando linhas
console.log(template)
    //expresões
console.log(`1 + 1 = ${1 + 1}`);
const up = texto => texto.toUpperCase();
console.log(up('Antonio Junio Pardim'));
// const nomeText = ' ';

function UpperCase(nomeText, number) {
    return nomeText.toUpperCase() + parseFloat(number).toFixed(2);
}
console.log(UpperCase('Drielle Cristina'));
console.log(`Ola ${UpperCase('Antonio')} !`);
console.log(UpperCase('Leonardo Santo Damasceno'));
console.log(UpperCase('Ola sou o Jonathan ', 3.7874))