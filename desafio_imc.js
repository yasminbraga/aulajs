//Cálculo do IMC

const nome = 'Yasmin'
const peso = 58
const altura = 1.59

const imc = peso / (altura * altura)
console.log(imc.toFixed(2))

if ( imc >= 30 ) {
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não está acima do peso`)
}
