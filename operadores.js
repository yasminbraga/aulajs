// Operadores Relacionais

// > - Maior que
// < - Menor que
//>= - Maior igual a
// <= - Menor igual a

const a = 5
const b = 6

// console.log(a > b) //false
// console.log(a < b) //true
// console.log(a >= b) //false
// console.log(a <= b) //true

//Operadores de Igualdade

// ==  igual a
// != diferente de 
// === Igual e do mesmo tipo
//!== Diferente inclusive do tipo

// const c = 5
// const d = '5'

// console.log(c == d) //true
// console.log(c === d) //false
// console.log(c != d) //false
// console.log(c !== d) //true

//Operadores Lógicos - São tipicamente usados com valores booleanos
//nos ajudam a criar expressoes lógicas a partir de dois ou mais valores

//&&  "E" vai comparar dois booleanos e retornar true caso as duas expressoes sejam verdadeiras
// ||  "OU" vai comparar dois booleanos e retornar verdadeiro caso uma das duas expressoes sejam verdadeiras.
// ! "NAO" vai negar uma expressao

// console.log( c == d && c !== d) //true
// console.log( c == d && c != d) //false

// console.log(c == d || c !== d) //true
// console.log( c == d || c != d) //true
// console.log( c!= d || c === d) //false

// //nega o que vem em seguida 
// console.log( !(c == d || c != d) ) //false
// console.log( !true) //false


//Operadores Aritmeticos

// *   Multiplicação
// /   Divisao
// %   Resto da divisao
// +   Adicao
// -   Subtracao

console.log( 2 * 2 ) //4
console.log( 2 / 2 ) //1
console.log( 2 % 1.4 )
console.log( 2 + 2 ) //4
console.log( 2 - 2 ) //0