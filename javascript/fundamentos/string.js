const escola = 'Cod3r';
const numero = 6;
console.log(escola.charAt(4)); //caractere 4 da string
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); //tabela ask 3 = 51
console.log(escola.indexOf('C')); // posição em relação a string 0,1,2,3,4..
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log('escola '.concat(escola).concat("!!!"));
console.log(escola.replace(/\d/, 'e'));
console.log(escola.replace(/\w/g, 'e')); //g = global
console.log(escola.replace(/\w/, 'e')); //g = global
console.log('Ana,Beatriz,Dora,Drielle,Antonio'.split(',')); // gera array
let Nomes = 'Ana,Beatriz,Dora,Drielle,Antonio'.split(',');
console.log(Nomes)
console.log(3 + 2) //soma
console.log('3' + 2) //contatenação
console.log('3' - 2) //subtração