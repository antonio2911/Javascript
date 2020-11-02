// Note que as funções trigonométricas (sin(), cos(), tan(), asin(), acos(), atan(), atan2()) recebem ou retornam ângulos em radianos. Divida por (Math.PI/180) para converter radianos em graus, ou multiplique por esse valor para fazer a conversão inversa.
// Math.abs(x)
// Retorna o módulo, ou valor absoluto, de um número (|x|).
// Math.acos(x)
// Retorna o arco-coseno de um número (arccosx).
// Math.acosh(x) 
// Retorna o arco-coseno hiperbólico de um número.
// Math.asin(x)
// Retorna o arco-seno de um número (arcsinx).
// Math.asinh(x) 
// Retorna o arco-seno hiperbólico de um número.
// Math.atan(x)
// Retorna o arco-tangente de um número (arctanx).
// Math.atanh(x) 
// Retorna o arco-tangente hiperbólico de um número (arctanx).
// Math.atan2(x, y)
// Retorna o arco-tangente do quociente de seus argumentos.
// Math.cbrt(x) 
// Retorna a raiz cúbica de um número (
// x
// 3
// ).
// Math.ceil(x)
// Retorna o menor inteiro que é maior ou igual a um número.
// Math.cos(x)
// Retorna o coseno de um número (cosx).
// Math.cosh(x) 
// Retorna o coseno hiperbólico de um número .
// Math.exp(x)
// Retorna ex, onde x é o argumento, e e é a constante de Euler (2.718...), a base do logaritmo natural.
// Math.expm1(x) 
// Retorna ex-1.
// Math.floor(x)
// Retorna o maior inteiro que é menor ou igual a um número.
// Math.fround(x) 
// Retorna a mais próxima representação de ponto flutuante de precisão-única de um número.
// Math.hypot([x[,y[,…]]]) 
// Retorna a raiz quadrada da soma dos quadrados dos argumentos (
// x2+y2+…
// ).
// Math.imul(x) 
// Retorna o resultado de uma multiplicação de inteiro de 32-bit.
// Math.log(x)
// Retorna o logaritmo natural (logex ou lnx) de um número.
// Math.log1p(x) 
// Retorna o logaritmo natural de 1 + x (loge(1+x) ou ln(1+x)) de um número.
// Math.log10(x) 
// Retorna o logaritmo de x na base 10 (log10x).
// Math.log2(x) 
// Retorna o logaritmo de x na base 2 (log2x).
// Math.max([x[,y[,…]]])
// Retorna o maior dentre os parâmetros recebidos.
// Math.min([x[,y[,…]]])
// Retorna o menor dentre os parâmetros recebidos.
// Math.pow(x,y)
// Retorna a base x elevada à potência y do expoente, ou seja, xy.
// Math.random()
// Retorna um número pseudo-aleatório entre 0 e 1.
// Math.round(x)
// Retorna o valor arrendodado de x, para o valor inteiro mais próximo.
// Math.sign(x) 
// Retorna o sinal de x, indicando se é positivo, negativo ou zero.
// Math.sin(x)
// Retorna o seno de um número (sinx).
// Math.sinh(x) 
// Retorna o seno hiperbólico de um número (sinhx).
// Math.sqrt(x)
// Retorna a raiz quadrada positiva de um número (
// x
// ).
// Math.tan(x)
// Retorna a tangente de um número (tanx).
// Math.tanh(x) 
// Retorna a tangente hiperbólica de um número (tanhx).
// Math.toSource() 
// Retorna a string "Math".
// Math.trunc(x) 
// Retorna a parte inteira de x, removendo quaisquer dígitos fracionários.
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2); //pow (base,expoente)
console.log(area.toFixed(2));
console.log(typeof Math);