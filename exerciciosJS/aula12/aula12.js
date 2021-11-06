// var idade = 12
// if (idade <18) {
//     console.log('Menor de idade')
// } else  {
//     console.log('Maior de idade7')
// }


var idade = 64
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

//Senão, se a idade for maior ou igual a 16 e a idade for menor que 18